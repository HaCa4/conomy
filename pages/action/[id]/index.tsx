import React, { useContext } from "react";

import { CongratsCard, ViewCard } from "../../../components";
import { ActionsContext } from "../../../utilities/store/actionsContext";

const Notification = () => {
  const { completedActions, selectedAction } = useContext(ActionsContext);
  let isInCompletedList =
    completedActions.filter((action) => action.id == selectedAction?.id).length > 0;

  return (
    <div className="notification-page">{isInCompletedList ? <CongratsCard /> : <ViewCard />}</div>
  );
};

export default Notification;
