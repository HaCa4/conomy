import Link from "next/link";
import React, { useContext } from "react";

import { ActionsContext } from "../utilities/store/actionsContext";
import { ActionProps } from "../utilities/types/types";

const Action: React.FC<ActionProps> = ({ info }) => {
  const { actionsList, setSelectedAction, completedActions } = useContext(ActionsContext);

  let inCompletedList = completedActions.filter((action) => action.id == info?.id).length !== 0;

  const onActionClick = () => {
    !inCompletedList && info.id && actionsList && setSelectedAction(actionsList[info.id - 1]);
  };

  return (
    <Link href={`/action/${info.id}`}>
      <div className="action-card" onClick={onActionClick}>
        <img src={info.image} alt={info.title} className="action-image" />
        <div className="action-text-wrapper">
          <span className="action-title">{info.title}</span>
          <span className="action-content">{info.description}</span>
        </div>
        {inCompletedList ? (
          <p className="action-points">Done</p>
        ) : (
          <p className="action-points">+{info.point}</p>
        )}
      </div>
    </Link>
  );
};

export default Action;
