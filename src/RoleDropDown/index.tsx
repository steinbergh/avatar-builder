import React from "react";
import "./styles.css";

const roles = [
  "Select One",
  "Founder",
  "Marketing & Partnerships",
  "Product & Engineering",
  "Finance & Ops",
  "Sales & Account Management",
  "Investor",
  "None",
];

export const RoleDropDown = ({
  setRole,
  role,
}: {
  setRole: (value: number) => void;
  role: number;
}) => {
  return (
    <div className="role-dd-wrapper">
      <label>{"What do you do?"}</label>
      <div className="role-dd">
        <select
          onChange={(e) => {
            const value = Number(e.target.value);
            setRole(value === roles.length ? 0 : value);
          }}
          value={role}
        >
          {roles.map((role, i) => (
            <option key={`${role}-${i}`} value={i} disabled={i === 0}>
              {role}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
