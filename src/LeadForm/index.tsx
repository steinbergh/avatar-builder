import React from "react";
import { useForm } from "react-hook-form";

type FormData = {
  role: string;
  company: string;
  email: string;
  reason: string;
  personalInterest: string;
};

export const LeadForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => {
    window.print();
    console.log(data);
  });

  console.log("errors");
  return (
    <form onSubmit={onSubmit}>
      <p>
        {"I'm a "}
        <select {...register("role")}>
          <option value="Rep">Rep</option>
          <option value="Sales Manager">Sales Manager</option>
          <option value="Sales Operations">Sales Operations</option>
          <option value="Finance, Accounting, or HR">
            Finance, Accounting, or HR
          </option>
          <option value="CEO, COO or Founder">CEO, COO or Founder</option>
          <option value="Other">Other</option>
        </select>
        {" at "}
        <input type="text" {...register("company")}></input>
        {"."}
      </p>
      <p>
        {"I'm at SaaStr to "}
        <select {...register("reason")}>
          <option value="learn from the best">learn from the best</option>
          <option value="discover new technology">
            discover new technology
          </option>
          <option value="build a stronger team">build a stronger team</option>
          <option value="have fun">have fun</option>
        </select>
        {"."}
      </p>
      <p>
        {"Personally, I love talking about "}
        <select {...register("personalInterest")}>
          <option value="my dog(s)">{"my dog(s)"}</option>
          <option value="my kid(s)">{"my kid(s)"}</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
          <option value="food">food</option>
        </select>
        {"."}
      </p>
      <div>
        <label htmlFor="email">
          {"Enter your email to receive your avatar for download."}
        </label>
        <input type="email" {...register("email")}></input>
      </div>
      <button className="print-button">Print Now</button>
    </form>
  );
};
