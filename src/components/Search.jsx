import axios from "axios";
import React, { useState } from "react";
import Products from "./Products";
import bridge from "../assets/bridge.jpeg";
import toast from "react-hot-toast";
const Search = () => {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);

  // handling the query for images
  const handleSubmit = async (e) => {
    e.preventDefault();

    // PixaBay Api Request
    const response = await axios.get(
      `https://pixabay.com/api/?key=${
        import.meta.env.VITE_APP_PIXABAY_API_KEY
      }&q=${query}`
    );

    //  Updating the Products
    setProducts(response.data.hits);

    // No Products Found
    if (response.data.hits.length === 0)
      toast.error("No Images Found", {
        position: "bottom-right",
      });

    // Empty query will result in error
    if (query === "") {
      toast.error("Search for Exploring Images", {
        position: "bottom-right",
      });
      // Updating the Products
      setProducts([]);
    }
    // Clearing the Query
    setQuery("");
  };

  return (
    <>
      <div className="relative">
        {/* Background Image */}
        <img src={bridge} alt="bridge" className="h-[100vmin] w-full" />
        {/* Overlay */}
        <div className="bg-black/70 absolute inset-0" />
        {/* Form */}
        <div className="absolute top-[50%] left-[50%] -translate-x-[50%]  w-1/2 ">
          <form
            onSubmit={handleSubmit}
            className="w-full flex items-center justify-center flex-col lg:flex-row  gap-4"
          >
            <input
              type="text"
              value={query}
              placeholder="Enter the text here"
              onChange={(e) => setQuery(e.target.value)}
              className="input input-bordered w-full lg:w-1/2 "
            />
            <button type="submit" className="btn btn-success">
              Submit
            </button>
          </form>
        </div>
      </div>
      <Products products={products} />
    </>
  );
};

export default Search;
