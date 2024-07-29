import React from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="demo-sidebar">
      <p onClick={() => navigate("/")}>Reviews</p>
      <p onClick={() => navigate("/blogs")}>Blogs</p>
      <p onClick={() => navigate("/blog-detail")}>Blog Detail</p>
      <p onClick={() => navigate("/schedule")}>Schedule</p>
    </div>
  );
};

export default Sidebar;
