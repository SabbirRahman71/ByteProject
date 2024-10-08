import toast from "react-hot-toast";

// Get blogs from localStorage
export const getBlogs = () => {
  let blogs = [];
  let storedBlogs = localStorage.getItem("blogs");
  if (storedBlogs) {
    blogs = JSON.parse(storedBlogs);
  }
  return blogs;
};

// Save a blog to localStorage
export const saveBlogs = (blog) => {
  let blogs = getBlogs();
  const isExist = blogs.find((b) => b.id === blog.id);
  if (isExist) {
    return toast.error("Already Bookmarked");
  }
  blogs.push(blog);
  localStorage.setItem("blogs", JSON.stringify(blogs));
  toast.success("Blog Bookmarked Successfully");
};

// Delete a blog from localStorage
export const deleteBlog = (id) => {
  let blogs = getBlogs();
  const remaining = blogs.filter((b) => b.id !== id);
  localStorage.setItem("blogs", JSON.stringify(remaining));
  toast.success("Blog Removed Successfully");
};
