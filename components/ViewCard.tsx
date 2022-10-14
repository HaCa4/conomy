import React, { useContext } from "react";
import { ActionsContext } from "../utilities/store/actionsContext";

const ViewCard = () => {
  const { selectedAction, completedActions, setCompletedActions, setEarnedPoints, earnedPoints } =
    useContext(ActionsContext);

  const handleEarnPoints = () => {
    if (selectedAction) {
      setCompletedActions([...completedActions, selectedAction]);
      setEarnedPoints(earnedPoints + selectedAction.point);
    }
  };

  return (
    <div className="card-notification">
      <img className="view-image" src={selectedAction?.image} />
      <p className="view-point">+{selectedAction?.point} Points</p>
      <p className="notification-card-title">{selectedAction?.title}</p>
      <p className="notification-card-content">{selectedAction?.description}</p>
      <div className="notification-card-button" onClick={handleEarnPoints}>
        Earn Points
      </div>
    </div>
  );
};

export default ViewCard;
