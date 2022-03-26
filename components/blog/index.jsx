import Link from "next/link";
import { useRouter } from "next/router";
import DateComponent from "../date";
import MaterialIcon from "../materialIcon";
import TextComponent from "../text";
import { BlogStyle } from "./style";

export default function BlogComponent(
  props = { id, date, title, description, sm, imgUrl, withImage }
) {
  return (
    <Link href={`articles/${props.id}`}>
      <BlogStyle className="p-2 mb-4">
        <div>
          <DateComponent date={props.date} />
          {props.withImage && (
            <div>
              <img
                src={props.imageUrl}
                className="img-fluid mb-4 mt-2"
                style={{ width: "100%", height: "300px" }}
              />
            </div>
          )}
          <TextComponent h2={!props.sm} h3={props.sm}>
            {props.title}
          </TextComponent>
          <div className="mt-2" style={{ opacity: 0.7, maxWidth: 400 }}>
            <TextComponent p={!props.sm} small={props.sm}>
              <div>{props.description}</div>
            </TextComponent>
          </div>
        </div>
        <div>
          <MaterialIcon iconName="east" />
        </div>
      </BlogStyle>
    </Link>
  );
}
