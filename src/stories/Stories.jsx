import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Stories = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function fetchBlogs() {
      const response = await fetch(
        "https://api.github.com/repos/RaghavendraCodes/portfolio-blogs/contents/STORIES"
      );
      const data = await response.json();

      const mdFiles = data.filter((file) => file.name.endsWith(".md"));

      // Fetch last commit date for each file
      const blogsWithDates = await Promise.all(
        mdFiles.map(async (file) => {
          const commitRes = await fetch(
            `https://api.github.com/repos/RaghavendraCodes/portfolio-blogs/commits?path=STORIES/${file.name}&per_page=1`
          );
          const commits = await commitRes.json();
          const lastModified = commits[0]?.commit?.committer?.date || null;

          return {
            ...file,
            lastModified,
          };
        })
      );

      setBlogs(blogsWithDates);
    }

    fetchBlogs();
  }, []);

  return (
    <div className="blogs flex flex-col mt-10">
      <h1 className="text-3xl font-bold text-white tracking-tight text-center mb-3 desc-text">
        Stories...
      </h1>
      <div className="blogs-list flex flex-col items-center">
        {blogs.map((file) => (
          <Link to={`/stories/story/${file.name}`} key={file.name}>
            <div className="blog w-[80vw] sm:w-[60vw] h-[10vh] bg-[#1e1e2e] border border-gray-600 m-2 rounded-lg flex flex-row justify-between items-center font-medium hover:bg-[#2a2a3a] transition">
              <div className="ml-6">
                <p className="blog-heading text-gray-200 font-semibold desc-text">
                  {file.name.replace(".md", "").replace(/-/g, " ")}
                </p>
              </div>
              <div className="mr-6 text-gray-400 text-sm">
                {file.lastModified
                  ? new Date(file.lastModified).toLocaleDateString("en-IN", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })
                  : "No date"}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Stories;
