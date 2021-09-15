import axios from "axios";
import useSWR from "swr";
import parse from "html-react-parser";

const CONTENT_URL = `http://localhost:8010/proxy/avatar-content/`;
const fetcher = (url: string) =>
  axios
    .get(url, { responseType: "document" })
    .then((res) => res.data.getElementById("content").outerHTML);

export const LandingPageContent = () => {
  const { data, error } = useSWR(CONTENT_URL, fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return <div>{parse(data)}</div>;
};
