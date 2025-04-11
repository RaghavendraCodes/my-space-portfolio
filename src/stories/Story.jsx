import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

export default function Story() {
  const { id } = useParams();
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    const url = `https://raw.githubusercontent.com/RaghavendraCodes/portfolio-blogs/main/STORIES/${id}`;

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("404 Not Found");
        return res.text();
      })
      .then((text) => setMarkdown(text))
      .catch(() => setMarkdown("# Error loading markdown file"));
  }, [id]);

  return (
    <div className="min-h-screen px-4 py-10 flex justify-center">
      <article className="prose prose-lg dark:prose-invert max-w-3xl w-full text-white bg-[#1a1c23] rounded-2xl p-6 shadow-lg shadow-black/30">
        {/* <h1 className="text-4xl font-bold mb-8 text-center text-gray-100">
          {id.replace(".md", "").replace(/-/g, " ")}
        </h1> */}

        <ReactMarkdown
          children={markdown}
          rehypePlugins={[rehypeHighlight]}
          className="prose dark:prose-invert max-w-none"
        />
      </article>
    </div>
  );
}
