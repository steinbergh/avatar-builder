import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { reasonOptions, roleOptions, interestOptions } from "./consts";
import { submitHubspotForm } from "./form";
import { avatarReferral } from "./referral";
import "./styles.css";

type FormData = {
  role: string;
  company: string;
  email: string;
  goal: string;
  interest: string;
};

export const LeadForm = ({
  firstname,
  lastname,
  photoUrl,
}: {
  firstname: string;
  lastname?: string;
  photoUrl: string;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => {
    window.print();
    submitHubspotForm({ firstname, lastname, ...data });
    avatarReferral({
      firstName: firstname,
      challenge: data.role,
      email: data.email,
      workspaceName: data.company,
      photoUrl,
      interest: data.interest,
      role: data.role,
    });
  });

  return (
    <form className="lead-form" onSubmit={onSubmit}>
      <p>
        {"I'm "}
        <span className="select-wrap">
          <select defaultValue="" {...register("role")}>
            {roleOptions.map(({ label, value }, i) => (
              <option value={value} key={`${label}-${i}`} disabled={i === 0}>
                {label}
              </option>
            ))}
          </select>
        </span>
        {" at "}
        <input
          className="text-input text-input__inline"
          type="text"
          placeholder="Your Company"
          {...register("company")}
        ></input>
        {"."}
      </p>
      <p>
        {"My main goal at SaaStr is to "}
        <span className="select-wrap">
          <select {...register("goal")}>
            {reasonOptions.map(({ label, value }, i) => (
              <option
                defaultValue=""
                value={value}
                key={`${label}-${i}`}
                disabled={i === 0}
              >
                {label}
              </option>
            ))}
          </select>
        </span>
        {"."}
      </p>
      <p>
        {"If you really want to get me talking, ask me about "}
        <span className="select-wrap">
          <select defaultValue="" {...register("interest")}>
            {interestOptions.map(({ label, value }, i) => (
              <option value={value} key={`${label}-${i}`} disabled={i === 0}>
                {label}
              </option>
            ))}
          </select>
        </span>
        {"."}
      </p>
      <div className="email-contain">
        <label htmlFor="email">{"Get my digital avatar."}</label>
        <input
          className="text-input"
          type="email"
          placeholder="Your Work Email"
          {...register("email")}
        ></input>
      </div>
      <button className="print-button">Print Now</button>
    </form>
  );
};
