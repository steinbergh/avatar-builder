import axios from "axios";
import useSWR from "swr";
import parse from "html-react-parser";
import scrollRevealInit from "../utils/scrollReveal";
import React from "react";

const CONTENT_URL =
  process.env.NODE_ENV === "development"
    ? `http://localhost:8010/proxy/avatar-content/`
    : `${process.env.PUBLIC_URL}/avatar-content/`;

const fetcher = (url: string) =>
  axios
    .get(url, { responseType: "document" })
    .then((res) => res.data.getElementById("content").outerHTML);

export const LandingPageContent = () => {
  const { data, error } = useSWR(CONTENT_URL, fetcher);
  React.useEffect(() => {
    if (!data) return;
    scrollRevealInit();
  }, [data]);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return <div style={{ backgroundColor: "white" }}>{parse(data)}</div>;
};
