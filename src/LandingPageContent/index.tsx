import axios from "axios";
import useSWR from "swr";
import parse, { domToReact } from "html-react-parser";
import { Element } from "domhandler/lib/node";
import scrollRevealInit from "../utils/scrollReveal";
import React from "react";

const CONTENT_URL =
  process.env.NODE_ENV === "development"
    ? `http://localhost:8010/proxy/avatar-content/`
    : `${process.env.PUBLIC_URL}/avatar-content/`;

const fetcher = async (url: string) => {
  return await axios
    .get(url, { responseType: "document" })
    .then((res) => res.data.getElementById("content").outerHTML);
};

export const LandingPageContent = ({ onClick }: { onClick: () => void }) => {
  const { data, error } = useSWR(CONTENT_URL, fetcher);

  React.useEffect(() => {
    if (!data) return;
    scrollRevealInit();
  }, [data]);

  if (error) return <div>failed to load</div>;
  if (!data) return <div></div>;

  return (
    <div className="landing-content" style={{ backgroundColor: "white" }}>
      {parse(data, {
        replace: (domNode) => {
          if (
            domNode instanceof Element &&
            domNode.attribs &&
            domNode.name === "a"
          ) {
            delete domNode.attribs.onclick;

            return (
              <a
                {...domNode.attribs}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onClick();
                }}
              >
                {domToReact(domNode.children)}
              </a>
            );
          }

          return domNode;
        },
      })}
    </div>
  );
};
