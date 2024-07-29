import React from "react";
import Sidebar from "../Sidebar";
import "./blogs.css";
import "quill/dist/quill.core.css";
import AddNewBlog from "./AddBlog/AddNewBlog";
import BlogList from "./BlogList";

const Blogs = () => {
  return (
    <div className="reviews-page" style={{height:'fit-content'}}>
      <Sidebar />
      <div className="reviews-cnt">
        <div className="demo-top-component"></div>
        <div className="reviews">
          <h2 className="reviews-title">Blogs</h2>
          {/* <AddNewBlog /> */}
          <BlogList />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
