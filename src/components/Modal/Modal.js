import { Text, createStyles } from "@mantine/core";
import React from "react";
import { MdClose } from "react-icons/md";
const useStyles = createStyles(() => ({
  btn: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "5px",
    borderRadius: "50%",
    cursor: "pointer",
    color: "#FF7F7F",
    backgroundColor: "#FFF !important",
    border: "1px solid #FFF",
    boxShadow: "0 8px 16px 0 rgba(0,0,0,0.1), 0 5px 20px 0 rgba(0,0,0,0.1) ",

    "&:hover": {
      backgroundColor: "#FF7F7F !important",
      border: "1px solid #FF7F7F",
      color: "#FFFFFF",
      transition: ".5s",
    },
  },
}));

const Modal = ({ toolDetails }) => {
  const { classes } = useStyles();
  const { name, limit, access } = toolDetails;
  return (
    <div>
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg"> Name : {name}</h3>
          <Text fw={600} variant="gradient" gradient={{ from: "teal", to: "blue", deg: 60 }}>
            Access : {access}
          </Text>
          <Text variant="gradient" gradient={{ from: "indigo", to: "cyan" }} className="py-2" fw={600}>
            Limit : {limit}
          </Text>
          <div className="modal-action">
            <label htmlFor="my_modal_6" className={classes.btn}>
              <MdClose />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
