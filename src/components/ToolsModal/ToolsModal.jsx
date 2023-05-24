import React from "react";

const ToolsModal = ({ toolDetails }) => {
//   console.log(toolDetails);
  const { name, limit, price, status } = toolDetails?.profile;
  return (
    <div>
      {/* modal */}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="flex justify-between pe-5">
            <h3 className="text-lg text-primary font-bold">{name}</h3>
            <h3 className="text-lg text-error font-bold">${price}</h3>
          </div>
          <p className="py-3 text-success">active status : {status}</p>
          <p className="py-1 text-sm text-primary font-semibold">limit : {limit}</p>
        </div>
      </div>
    </div>
  );
};

export default ToolsModal;
