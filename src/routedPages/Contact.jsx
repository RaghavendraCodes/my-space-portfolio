import React from "react";
import { Mail, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-10 text-white">
      <div className="bg-[#1e1e2e] border border-gray-600 rounded-xl shadow-lg w-full max-w-xl p-8 mt-20">
        <h2 className="text-3xl font-bold text-center mb-6">Let’s Connect</h2>
        <p className="text-center text-gray-400 mb-8">
          Whether you have a question, a project, or just want to say hi — my inbox is always open.
        </p>

        <div className="flex flex-col gap-4 text-sm sm:text-base">
          <div className="flex items-center gap-3 bg-[#2a2a3a] p-4 rounded-lg">
            <Mail className="text-blue-400" />
            <a
              href="mailto:raghavendrar312004@gmail.com"
              className="text-white hover:underline break-all"
            >
              raghavendrar312004@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-3 bg-[#2a2a3a] p-4 rounded-lg">
            <Linkedin className="text-blue-400" />
            <a
              href="https://www.linkedin.com/in/raghavendra-r-363701202/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline"
            >
              linkedin.com/in/raghavendra-r-363701202
            </a>
          </div>
        </div>

        <div className="text-center text-gray-500 mt-10 text-sm">
          Built with ☕ & 💻 by Raghavendra R
        </div>
      </div>
    </div>
  );
};

export default Contact;
