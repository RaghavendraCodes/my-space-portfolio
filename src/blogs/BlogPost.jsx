import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw"; // ⬅️ Add this
import rehypeHighlight from "rehype-highlight";
import 'highlight.js/styles/github-dark.css';

export function BlogPost() {
  const { id } = useParams();
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    const url = `https://raw.githubusercontent.com/RaghavendraCodes/portfolio-blogs/main/BLOGS/${id}`;

    fetch(url)
      .then(res => res.text())
      .then(text => setMarkdown(text))
      .catch(() => setMarkdown("# Error loading markdown file"));
  }, [id]);

  return (
    <article className="max-w-3xl mx-auto px-4 py-8 text-white">
      <ReactMarkdown
        children={markdown}
        rehypePlugins={[rehypeRaw, rehypeHighlight]} // ⬅️ Add rehypeRaw here
        className="prose dark:prose-invert max-w-none"
      />
    </article>
  );
}
