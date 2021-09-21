import { useForm } from "react-hook-form";
import { reasonOptions, roleOptions, interestOptions } from "./consts";
import { submitHubspotForm } from "./form";
import { avatarReferral } from "./referral";
import "./styles.css";
import classnames from "classnames";

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
  shouldPrint,
  onClose,
}: {
  firstname: string;
  lastname?: string;
  photoUrl: string;
  shouldPrint: boolean;
  onClose: () => void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = handleSubmit(
    (data) => {
      const { role: _role, ...formData } = data;
      const { role, challenge } = JSON.parse(_role) as {
        role: string;
        challenge: string;
      };

      if (shouldPrint) {
        window.print();
      }

      Promise.allSettled([
        submitHubspotForm({ firstname, lastname, role, ...formData }),
        avatarReferral({
          firstName: firstname,
          challenge,
          email: data.email,
          workspaceName: data.company,
          photoUrl,
          interest: data.interest,
          role,
        }),
      ]).then(() => {
        onClose();
      });
    },
    (errors, e) => console.log(errors, e)
  );

  return (
    <form className="lead-form" onSubmit={onSubmit}>
      <p>
        {"I'm "}
        <span
          className={classnames("select-wrap", {
            error: errors.role,
          })}
        >
          <select defaultValue="" {...register("role", { required: true })}>
            {roleOptions.map(({ label, value }, i) => (
              <option value={value} key={`${label}-${i}`} disabled={i === 0}>
                {label}
              </option>
            ))}
          </select>
        </span>
        {" at "}
        <input
          className={classnames("text-input text-input__inline", {
            error: errors.company,
          })}
          type="text"
          placeholder="Your Company"
          {...register("company", { required: true })}
        ></input>
        {"."}
      </p>
      <p>
        {"My main goal at SaaStr is to "}
        <span
          className={classnames("select-wrap", {
            error: errors.goal,
          })}
        >
          <select defaultValue="" {...register("goal", { required: true })}>
            {reasonOptions.map(({ label, value }, i) => (
              <option value={value} key={`${label}-${i}`} disabled={i === 0}>
                {label}
              </option>
            ))}
          </select>
        </span>
        {"."}
      </p>
      <p>
        {"If you really want to get me talking, ask me about "}
        <span
          className={classnames("select-wrap", {
            error: errors.interest,
          })}
        >
          <select defaultValue="" {...register("interest", { required: true })}>
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
          className={classnames("text-input", {
            error: errors.email,
          })}
          type="email"
          placeholder="Your Work Email"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        ></input>
      </div>
      <button className="print-button">
        {shouldPrint ? "Print Now →" : "Send my Avatar"}
      </button>
    </form>
  );
};
