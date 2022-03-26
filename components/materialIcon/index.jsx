export default function MaterialIcon(props = { iconName }) {
  return (
    <span
      className="material-icons"
      style={{ color: props.white ? "white" : "rgb(20,20,20)",fontSize:props.size ? props.size:24 }}
    >
      {props.iconName}
    </span>
  );
}
