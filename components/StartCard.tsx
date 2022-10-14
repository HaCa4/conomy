import { useContext } from "react";

import { ActionsContext } from "../utilities/store/actionsContext";

const StartCard: React.FC = () => {
  const { setIsFirstEntry } = useContext(ActionsContext);
  const handleStart = () => {
    typeof window !== "undefined" && localStorage.setItem("firstEntry", "no");
    setIsFirstEntry(false);
  };
  return (
    <div className="start-card">
      <p className="start-card-title">Welcome to the TestCase APP!</p>
      <p className="start-card-content">
        We created this exercise to gain insights about your development skills
      </p>
      <div className="start-card-button" onClick={handleStart}>
        Start
      </div>
    </div>
  );
};

export default StartCard;
