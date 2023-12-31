import React from "react";

const LodingSpinner = () => {
  return (
    <div className="d-flex align-items-center p-5 ">
      <strong role="status">Loading...</strong>
      <div className="spinner-border ms-auto" aria-hidden="true"></div>
    </div>
  );
};

export default LodingSpinner;
