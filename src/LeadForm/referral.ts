import axios from "axios";

const DEV_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8010/proxy/api/auth/avatar-referral/"
    : "https://app.quotapath.com/api/auth/avatar-referral/";

type ReferralData = {
  challenge: string;
  interest: string;
  role: string;
  email: string;
  firstName: string;
  workspaceName: string;
  photoUrl: string;
};

export const avatarReferral = async (content: ReferralData) => {
  const config = {
    // important!
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await axios.post(DEV_URL, content, config);
  return response;
};
