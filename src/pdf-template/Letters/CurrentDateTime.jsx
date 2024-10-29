import React from "react";

const CurrentDateTime = () => {
  // Get the current date and time
  const currentDateTime = new Date().toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return <span>{currentDateTime}</span>;
};

export default CurrentDateTime;
