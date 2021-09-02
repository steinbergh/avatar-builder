import React from "react";
import "./styles.css";

export const NameInput = ({
  setLeadName,
  leadName,
}: {
  setLeadName: (value: string) => void;
  leadName: string;
}) => {
  return (
    <div className="name-input-wrapper">
      <label className="name-input-label">Hello, my name is</label>
      <input
        className="name-input"
        type="text"
        onChange={(e) => {
          setLeadName(e.target.value);
        }}
        placeholder="Your Name"
        value={leadName}
      ></input>
    </div>
  );
};
