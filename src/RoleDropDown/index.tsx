import React from "react";
// import "./styles.css";

const roles = [
  "What do you do?",
  "Founder",
  "Marketing & Partnerships",
  "Product & Engineering",
  "Finance & Ops",
  "Sales & Account Management",
  "Investor",
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
      <select
        className="role-dd"
        onChange={(e) => {
          setRole(Number(e.target.value));
        }}
        value={role}
        defaultValue={0}
      >
        {roles.map((role, i) => (
          <option value={i}>{role}</option>
        ))}
      </select>
    </div>
  );
};
