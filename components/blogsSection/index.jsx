import { useEffect, useState } from "react";
import BlogComponent from "../blog";
import { BlogSectionStyle } from "./style";

export default function BlogsSectionComponent(props = { blogs: [] }) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(window.innerWidth < 900);
    window.addEventListener("resize", (e) => {
      setIsMobile(window.innerWidth < 900);
    });
  }, []);

  return (
    <BlogSectionStyle className="row mb-2">
      <div
        className="col-lg"
        style={{
          display:
            props.blogs[0] != null && props.blogs[1] != null ? "flex" : "block",
          flexDirection: "column",
        }}
      >
        {props.blogs[0] && <BlogComponent {...props.blogs[0]} />}
        {props.blogs[1] && <BlogComponent {...props.blogs[1]} />}
      </div>
      <div
        className="col-lg-6"
        style={{ display: "flex", flexDirection: "column" }}
      >
        {props.blogs[2] && <BlogComponent withImage={!isMobile} {...props.blogs[2]} />}
      </div>
      <div
        className="col-lg"
        style={{
          display:
            props.blogs[3] != null &&
            props.blogs[4] != null &&
            props.blogs[5] != null
              ? "flex"
              : "block",
          flexDirection: "column",
        }}
      >
        {props.blogs[3] && <BlogComponent sm={!isMobile} {...props.blogs[3]} />}
        {props.blogs[4] && <BlogComponent sm={!isMobile} {...props.blogs[4]} />}
        {props.blogs[5] && <BlogComponent sm={!isMobile} {...props.blogs[5]} />}
      </div>
    </BlogSectionStyle>
  );
}
