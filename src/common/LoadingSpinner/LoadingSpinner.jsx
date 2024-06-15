import "./LoadingSpinner.scss";
import { ClipLoader } from "react-spinners";

const LoadingSpinner = () => {
  return (
    <div className="Spinner">
      <ClipLoader color="white" size={45} speedMultiplier={0.5}/>
    </div>
  );
};

export default LoadingSpinner;
