import React from "react";

const WelcomeMessge = ({ onGetPostClick }) => {
  return (
    <div className="welcome">
      <h2>No post to shown</h2>
      <button
        type="button"
        className="btn btn-primary"
        onClick={onGetPostClick}
      >
        Get post from server
      </button>
    </div>
  );
};

export default WelcomeMessge;
