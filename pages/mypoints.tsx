import { NextPage } from "next";
import { useContext } from "react";

import { ActionsContext } from "../utilities/store/actionsContext";
import { CompletedAction } from "../components";

const CompletedActions: NextPage = () => {
  const { completedActions, actionsList } = useContext(ActionsContext);

  return (
    <div className="completed-page">
      <h5 className="completed-page-title">
        Completed Actions ({completedActions.length}/{actionsList?.length})
      </h5>
      {completedActions.length ? (
        completedActions.map((completed) => <CompletedAction key={completed.id} info={completed} />)
      ) : (
        <p className="completed-page-title"> You haven&apos;t completed any action yet</p>
      )}
    </div>
  );
};

export default CompletedActions;
