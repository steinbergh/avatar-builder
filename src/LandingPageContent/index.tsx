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
  return await axios.get(url, { responseType: "document" });
};

export const LandingPageContent = ({ onClick }: { onClick: () => void }) => {
  // const { data, error } = useSWR(CONTENT_URL, fetcher);
  const [data, setData] = React.useState<null | string>(null);
  const [content, setContent] = React.useState<
    string | JSX.Element | JSX.Element[]
  >([]);
  console.log("render");

  React.useEffect(() => {
    fetcher(CONTENT_URL).then((res) =>
      setData(res.data.getElementById("content").outerHTML)
    );
  }, []);

  React.useEffect(() => {
    if (!data) return;
    scrollRevealInit();
    setContent(
      parse(data, {
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
      })
    );
  }, [data, onClick]);

  // if (error) return <div>failed to load</div>;
  if (!data) return <div></div>;

  return <div style={{ backgroundColor: "white" }}>{content}</div>;
};
