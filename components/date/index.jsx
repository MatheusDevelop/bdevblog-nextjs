import { DateTextStyle } from "./style";
import dayjs from "dayjs";

export default function DateComponent(props) {
  return (
    <DateTextStyle>{dayjs(props.date).format("MMM D, YYYY")}</DateTextStyle>
  );
}
