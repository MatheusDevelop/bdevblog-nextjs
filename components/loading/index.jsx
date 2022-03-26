import { ScaleLoader } from "react-spinners";
export default function LoadingComponent() {
  return (
    <div style={{width:'100%',display:'flex',justifyContent:'center'}}>
      <ScaleLoader loading color="rgb(20,20,20)" />
    </div>
  );
}
