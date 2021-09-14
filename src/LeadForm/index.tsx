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
        <select {...register("role")}>
          <option value="" disabled selected>
            Select one
          </option>
          {roleOptions.map(({ label, value }, i) => (
            <option value={value} key={`${label}-${i}`}>
              {label}
            </option>
          ))}
        </select>
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
        <select {...register("goal")}>
          <option value="" disabled selected>
            Select one
          </option>
          {reasonOptions.map(({ label, value }, i) => (
            <option value={value} key={`${label}-${i}`}>
              {label}
            </option>
          ))}
        </select>
        {"."}
      </p>
      <p>
        {"If you really want to get me talking, ask me about "}
        <select {...register("interest")}>
          <option value="" disabled selected>
            Select one
          </option>
          {interestOptions.map(({ label, value }, i) => (
            <option value={value} key={`${label}-${i}`}>
              {label}
            </option>
          ))}
        </select>
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
