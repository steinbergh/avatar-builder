import React from "react";
import "./styles.css";

export const NameInput = () => {
  const [name, setName] = React.useState("");

  return (
    <div className="name-input-wrapper">
      <label className="name-input-label">Hello, my name is</label>
      <input
        className="name-input"
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
        placeholder="Your Name"
        value={name}
      ></input>
    </div>
  );
};
