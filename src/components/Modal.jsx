import React from "react";

const Modal = ({ product, onClose }) => {
  return (
    <>
      <dialog
        id="my_modal_3"
        className="modal"
        open={product ? true : false}
        onClose={onClose}
      >
        <div className="modal-box ">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-0 top-2">
              ✕
            </button>
          </form>
          <img
            src={product?.largeImageURL}
            alt={product?.user}
            className="w-full h-[300px] object-cover"
          />
          <div className="grid grid-cols-2 gap-1 place-items-center">
            <h1 className="mt-4 text-sm font-light">Likes: {product?.likes}</h1>
            <h1 className="mt-4 text-sm font-light">Views: {product?.views}</h1>
            <h1 className="mt-4 text-sm font-light">
              Comments: {product?.comments}
            </h1>
            <h1 className="mt-4 text-sm font-light">
              Image Size: {product?.imageWidth}*{product?.imageHeight}
            </h1>
          </div>
        </div>
      </dialog>
    </>
  );
};
export default Modal;
