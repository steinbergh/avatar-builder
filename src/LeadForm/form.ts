import axios from "axios";

type HSFormData = {
  firstname: string;
  lastname?: string;
  email: string;
  role: string;
  interest: string;
  goal: string;
  company: string;
};

export const submitHubspotForm = async ({
  email,
  firstname,
  lastname = "SaaStr",
  goal,
  role,
  interest,
  company,
}: HSFormData) => {
  const portalId = "4667033";
  const formGuid = "89458a63-fb0b-4f71-9a84-4034c5e88efe";
  const config = {
    // important!
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await axios.post(
    `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`,
    {
      portalId,
      formGuid,
      fields: [
        {
          name: "firstname",
          value: firstname,
        },
        {
          name: "lastname",
          value: lastname,
        },
        {
          name: "email",
          value: email,
        },
        {
          name: "avatar_interest",
          value: interest,
        },
        {
          name: "avatar_saastr",
          value: goal,
        },
        {
          name: "avatar_role",
          value: role,
        },
        {
          name: "company",
          value: company,
        },
      ],
    },
    config
  );
  return response;
};
