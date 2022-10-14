import { ReactNode } from "react";

export interface SingleAction {
  id: number;
  title: string;
  description: string;
  point: number;
  image: string;
}
export interface ActionContextValues {
  actionsList: SingleAction[];
  setActionsList: React.Dispatch<React.SetStateAction<SingleAction[]>>;
  completedActions: SingleAction[];
  setCompletedActions: React.Dispatch<React.SetStateAction<SingleAction[]>>;
  selectedAction: SingleAction;
  setSelectedAction: React.Dispatch<React.SetStateAction<SingleAction>>;
  isFirstEntry: boolean;
  setIsFirstEntry: React.Dispatch<React.SetStateAction<boolean>>;
  earnedPoints: number;
  setEarnedPoints: React.Dispatch<React.SetStateAction<number>>;
}
export interface HomeProps {
  fetchedActions: SingleAction[];
}
export interface ContextProviderProps {
  children: ReactNode;
}
export interface ActionProps {
  info: SingleAction;
}

export interface LayoutProps {
  children: ReactNode;
}
