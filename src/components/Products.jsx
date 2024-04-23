import React, { useEffect, useState } from "react";
import { FaMagnifyingGlassPlus } from "react-icons/fa6";
import Modal from "./Modal";
const Products = ({ products }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [count, setCount] = useState(0);

  // Opening the modal
  const handleIconClick = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  // Closing the modal
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProduct(null); // Reset the selected product
  };

  // Incrementing the Count
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="my-10">
      <div className="flex justify-center items-center gap-10">
        {/* Title */}
        <h1 className="inline-block font-medium text-3xl border-b-2 border-white w-fit my-8">
          Explore All Images
        </h1>
        {/* Counter */}
        <span className="">{count}</span>
      </div>
      <div className="grid grid-cols-4 gap-8 px-5">
        {/*  Single Product Card */}
        {products?.map((item) => (
          <div className="relative h-[250px]" key={item.id}>
            <img
              id={item.id}
              src={item.previewURL}
              alt=""
              className="object-cover w-full h-[80%] rounded-t-xl"
            />
            <FaMagnifyingGlassPlus
              size={25}
              className="absolute bottom-14 right-1 text-white rounded-full bg-black p-1 cursor-pointer"
              onClick={() => handleIconClick(item)}
            />
            <div className="h-[20%} bg-slate-600/45 rounded-b-xl py-3 px-1">
              <h1 className="text-sm text-white font-medium">
                User: {item.user}
              </h1>
              <span className="text-xs text-white font-medium truncate block ">
                Tags: {item.tags}
              </span>
            </div>
          </div>
        ))}
      </div>
      {/* Modal on or off */}
      {showModal && (
        <Modal product={selectedProduct} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default Products;
