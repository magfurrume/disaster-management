import React, { useState } from "react";
import "./popup.css";

const Popup = ({ coordinates, onSubmit, onClose }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [note, setNote] = useState("");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleNoteChange = (e) => {
    setNote(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      coordinates,
      selectedOption,
      note,
    };
    console.log("Form Data: ", formData);
    onSubmit(formData);
  };

  return (
    <div className="popup">
      <button className="close-btn" onClick={onClose}>
        &times;
      </button>
      <h3>Location Information</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Coordinates: </label>
          <input
            type="text"
            value={coordinates}
            readOnly
            className="coordinates-input"
          />
        </div>
        <div className="form-group">
          <label>Choose an option:</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                value="Option 1"
                checked={selectedOption === "Option 1"}
                onChange={handleOptionChange}
              />
              Option 1
            </label>
            <label>
              <input
                type="radio"
                value="Option 2"
                checked={selectedOption === "Option 2"}
                onChange={handleOptionChange}
              />
              Option 2
            </label>
            <label>
              <input
                type="radio"
                value="Option 3"
                checked={selectedOption === "Option 3"}
                onChange={handleOptionChange}
              />
              Option 3
            </label>
          </div>
        </div>
        <div className="form-group">
          <label>Note:</label>
          <textarea
            value={note}
            onChange={handleNoteChange}
            placeholder="Enter a note"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Popup;
