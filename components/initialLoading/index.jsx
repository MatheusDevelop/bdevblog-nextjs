import LoadingComponent from "../loading";

export default function InitialLoadingComponent() {
  return (
    <div
      style={{
        width: "100%",
        position: "fixed",
        height: "100%",
        top: 0,
        right: 0,
        
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LoadingComponent />
    </div>
  );
}
