import { Link } from "react-router-dom";
import placeHolderImage from "../assets/404.jpg";
import { MdDeleteForever } from "react-icons/md";

const BlogCard = ({ blog, deletable, handleDeleteBlog }) => {
  const { cover_image, title, description, published_at, id } = blog;

  return (
    <div className="relative flex">
      <Link
        to={`/blog/${id}`}
        rel="noopener noreferrer"
        href="#"
        className="max-w-sm mx-auto transition border-2 hover:scale-105 border-primary hover:border-secondary rounded-lg border-opacity-30
       group hover:no-underline focus:no-underline dark:bg-gray-50"
      >
        <img
          role="presentation"
          className="object-cover w-full rounded h-44 dark:bg-gray-500"
          src={cover_image || placeHolderImage}
        />
        <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {title}
          </h3>
          <span className="text-xs dark:text-gray-600">
            {" "}
            {new Date(published_at).toLocaleDateString()}
          </span>
          <p>{description}</p>
        </div>
      </Link>
      <div>
        {deletable && (
          <div
            onClick={() => {
              handleDeleteBlog(id);
            }}
            className="absolute bg-primary p-3 ml-5 rounded-full hover:bg-secondary cursor-pointer group hover:scale-105 -top-5 -right-5"
          >
            <MdDeleteForever
              size={20}
              className="text-secondary group-hover:text-primary"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogCard;
