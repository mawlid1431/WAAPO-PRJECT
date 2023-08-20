import { useState, useEffect } from "react";
import axios from "axios";
import track from "../assets/track.jpg";
import profile from "../assets/profile.jpg";
import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard";

function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    axios
      .get("http://localhost:8000/blog/")
      .then((res) => {
        setBlogs(res.data.message);
      })
      .catch((err) => {
        console.error(err);
      });
  });

  const handleOnAll = () => {
    setFilter("all");
  };
  const handleOnBusiness = () => {
    setFilter("business");
  };
  const handleOnTechnology = () => {
    setFilter("technology");
  };
  const handleOnHealth = () => {
    setFilter("health");
  };
  const handleOnPolitics = () => {
    setFilter("politics");
  };

  let filteredBlogs;
  if (filter == "all") {
    filteredBlogs = blogs;
  } else if (filter == "business") {
    filteredBlogs = blogs.filter((bBlogs) => bBlogs.category == "Business");
  } else if (filter == "technology") {
    filteredBlogs = blogs.filter((bBlogs) => bBlogs.category == "Technology");
  } else if (filter == "health") {
    filteredBlogs = blogs.filter((bBlogs) => bBlogs.category == "Health");
  } else if (filter == "politics") {
    filteredBlogs = blogs.filter((bBlogs) => bBlogs.category == "Politics");
  }

  return (
    <div className="mx-20">
      <div className="text-center text-4xl">
        Have an Idea?{" "}
        <Link to="/createBlog" className="text-blue-600">
          Write blog
        </Link>
      </div>
      <div className="flex my-36">
        <div className="w-[300%]">
          <img className="w-[1500px]" src={track} alt="" />
        </div>
        <div className="pl-9">
          <p
            style={{
              display: "inline-block",
              border: "2px solid",
              borderRadius: "0.25rem",
              paddingLeft: "0.25rem",
              paddingRight: "0.25rem",
              marginBottom: "6px",
              fontWeight: "bold",
              fontSize: "0.875rem",
            }}
          >
            Education
          </p>
          <p className="font-bold text-2xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
            tenetur officiis tempore ullam quo aspernatur minus, quis aliquam
            ducimus? sit, amet consectetur adipisicing elit. Laborum tenetur
            officiis tempore ullam quo aspernatur minus, quis aliquam ducimus?
            Quaerat quo odit voluptates iusto corporis eaque possimus at, nobis
            ut? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Laborum tenetur officiis tempore ullam quo aspernatur minus, quis
            aliquam ducimus? Quaerat quo odit voluptates iusto corporis eaque
            possimus at, nobis ut?
          </p>
          <div className="flex items-center pt-4 align-bottom">
            <img className="rounded-full w-10" src={profile} />
            <p className="text pl-4">Abdikhaliq Mohamoud</p>
          </div>
        </div>
      </div>
      <div className="font-bold text-2xl pb-4">Latest Articles</div>
      <div className="flex gap-x-2 border-b-2 ">
        <button
          className="focus:font-bold focus:border-b-2 pb-2 focus:border-black"
          onClick={handleOnAll}
        >
          All
        </button>
        <button
          className="focus:font-bold focus:border-b-2 pb-2 focus:border-black"
          onClick={handleOnBusiness}
        >
          Business
        </button>
        <button
          className="focus:font-bold focus:border-b-2 pb-2 focus:border-black"
          onClick={handleOnTechnology}
        >
          Technology
        </button>
        <button
          className="focus:font-bold focus:border-b-2 pb-2 focus:border-black"
          onClick={handleOnHealth}
        >
          Health
        </button>
        <button
          className="focus:font-bold focus:border-b-2 pb-2 focus:border-black"
          onClick={handleOnPolitics}
        >
          Politics
        </button>
      </div>
      <div className="flex flex-wrap gap-x-6">
        {filteredBlogs.map((blog) => (
          <BlogCard blog={blog} />
        ))}
      </div>
    </div>
  );
}
export default BlogList;
