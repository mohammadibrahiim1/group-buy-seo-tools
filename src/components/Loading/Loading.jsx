import { Loader, createStyles } from "@mantine/core";
import React from "react";

const useStyles = createStyles(() => ({
  loader: {
    margin: 0,
    position: "absolute",
    top: "50%",
    "-ms-transform": "translateY(-50%)",
    transform: "translateY(-50%)",
  },
}));

const Loading = () => {
  return (
    <div>
      <section className="d-flex justify-content-center align-content-center">
        <div
          class="spinner-grow loader"
          style={{ width: "3rem", height: "3rem" }}
          role="status"
        >
          <span class="visually-hidden ">
            <Loader color="red" variant="dots" />
          </span>
        </div>
      </section>
    </div>
  );
};

export default Loading;
