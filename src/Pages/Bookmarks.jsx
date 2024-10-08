import { useEffect, useState } from "react";
import { deleteBlog, getBlogs } from "../Utils/Index";
import BlogCard from "../Components/BlogCard";
import EmptyState from "../Components/EmptyState";

const Bookmarks = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const storedBlogs = getBlogs();
    setBlogs(storedBlogs);
  }, []);

  const handleDeleteBlog = (id) => {
    deleteBlog(id);
    const storedBlogs = getBlogs();
    setBlogs(storedBlogs);
  };

  // Check if blogs are empty and display a message
  if (blogs.length === 0) {
    return (
      <EmptyState
        message="No Bookmarks Found"
        address={"/blogs"}
        label={"Go to Blogs"}
      ></EmptyState>
    );
  }

  return (
    <div className="grid px-4 sm:px-8 lg:px-12 py-8 justify-center grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {blogs.slice(0, 18).map((blog) => (
        <BlogCard
          handleDeleteBlog={handleDeleteBlog}
          deletable={true}
          key={blog.id}
          blog={blog}
        />
      ))}
    </div>
  );
};

export default Bookmarks;
