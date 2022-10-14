import React from "react";

import { ActionProps } from "../utilities/types/types";

const CompletedAction: React.FC<ActionProps> = ({ info }) => {
  return (
    <div className="completed-action">
      <span className="completed-title">{info.title}</span>
      <span className="completed-points">+{info.point}</span>
    </div>
  );
};

export default CompletedAction;
