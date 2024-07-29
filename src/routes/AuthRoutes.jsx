import React from "react";
import { Route, Routes } from "react-router-dom";
import Reviews from "../GWA/Reviews/Reviews";
import Blogs from "../GWA/Blogs/Blogs";
import DetailedBlog from "../GWA/Blogs/Blog/DetailedBlog";
import Schedule from "../GWA/Schedule/Schedule";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Reviews />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/blog-detail" element={<DetailedBlog />} />
      <Route path="/schedule" element={<Schedule />} />
    </Routes>
  );
};

export default AuthRoutes;
