import { Text } from "@mantine/core";
import React from "react";

const Modal = ({ toolDetails }) => {
  const { name, limit, access } = toolDetails;
  return (
    <div>
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold text-[#ED6E53]">{name}</h3>
          <Text className="text-secondary text-md"> Access : {access}</Text>
          <Text className="text-dark-50 font-semibold"> Limit : {limit}</Text>
        </div>
        <label className="modal-action" htmlFor="my_modal_6">
          Close
        </label>
      </div>
    </div>
  );
};

export default Modal;
