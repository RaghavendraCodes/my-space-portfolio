// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home/Home';
import Projects from './projects/Projects';
import Blogs from './blogs/Blogs';
import Contact from './routedPages/Contact';
import Whodunnit from './routedPages/StoriesFull';
import Navbar from './navbar/Navbar';
import BlogsFull from './routedPages/BlogsFull';
import ProjectsFull from './routedPages/ProjectsFull';
import Layout2 from './Layout2';
import { BlogPost } from './blogs/BlogPost';
import Story from './stories/Story';
import Stories from './stories/Stories';
import StoriesFull from './routedPages/StoriesFull';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Layout2>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsFull />} />
          <Route path="/blogs" element={<BlogsFull />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/stories" element={<StoriesFull />} />
          <Route path="/blogs/blog/:id" element={<BlogPost/>} />
          <Route path='/stories/story/:id' element={<Story/>}/>
        </Routes>
        </Layout2>
      </div>
    </Router>
  );
}

export default App;
