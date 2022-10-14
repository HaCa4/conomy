import React, { ReactNode, useState } from "react";
import { ActionContextValues, ContextProviderProps, SingleAction } from "../types/types";

export const ActionsContext = React.createContext({} as ActionContextValues);

export const ActionsContextProvider: React.FC<ContextProviderProps> = ({
  children,
}: ContextProviderProps) => {
  const [actionsList, setActionsList] = useState<SingleAction[]>([]);
  const [completedActions, setCompletedActions] = useState<SingleAction[]>([]);
  const [selectedAction, setSelectedAction] = useState<SingleAction>({} as SingleAction);
  const [isFirstEntry, setIsFirstEntry] = useState<boolean>(true);
  const [earnedPoints, setEarnedPoints] = useState<number>(0);

  return (
    <ActionsContext.Provider
      value={{
        actionsList,
        setActionsList,
        completedActions,
        setCompletedActions,
        selectedAction,
        setSelectedAction,
        isFirstEntry,
        setIsFirstEntry,
        earnedPoints,
        setEarnedPoints,
      }}
    >
      {children}
    </ActionsContext.Provider>
  );
};
