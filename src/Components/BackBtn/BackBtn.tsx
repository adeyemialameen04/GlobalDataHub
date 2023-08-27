import { useNavigate } from "react-router-dom";
import "./backBtn.css";

const BackBtn = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="container back-container">
      <button onClick={handleBack}>Back</button>
    </div>
  );
};

export default BackBtn;
