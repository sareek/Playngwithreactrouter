import React from "react";
import errorImage from "../assets/images/error.png";

const Page404NotFound = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={errorImage} alt="error" />
    </div>
  );
};

export default Page404NotFound;
