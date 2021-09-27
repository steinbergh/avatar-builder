import classnames from "classnames";
import React from "react";
import "./styles.css";

export const NameInput = ({
  setLeadName,
  leadName,
  isError,
}: {
  setLeadName: (value: string) => void;
  leadName: string;
  isError: boolean;
}) => {
  return (
    <div className="name-input-wrapper">
      <label className="name-input-label">Hello, my name is</label>
      <input
        className={classnames("name-input", { error: isError })}
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
