import React from "react";
import "./popup.css";

const Popup = ({ coordinates, onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <div className="popup">
      <h3>Location Info</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Coordinates: </label>
          <input
            type="text"
            value={coordinates}
            readOnly
            className="coordinates-input"
          />
        </div>
        <div>
          <label>Enter Name: </label>
          <input type="text" name="name" required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Popup;
