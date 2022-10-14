import type { NextPage } from "next";
import axios from "axios";
import { useContext, useEffect, useState } from "react";

import { ActionsContext } from "../utilities/store/actionsContext";
import { Action, Welcome } from "../components";
import { HomeProps, SingleAction } from "../utilities/types/types";

const Home: NextPage<HomeProps> = ({ fetchedActions }: HomeProps) => {
  const { isFirstEntry, setIsFirstEntry, setActionsList, actionsList, completedActions } =
    useContext(ActionsContext);

  const actionsLeft = actionsList.length - completedActions.length;

  useEffect(() => {
    setActionsList(fetchedActions);
    window.localStorage !== undefined &&
      localStorage.getItem("firstEntry") === "no" &&
      setIsFirstEntry(false);
  });

  return (
    <>
      {isFirstEntry && <Welcome />}
      {!isFirstEntry && (
        <div className="home-page">
          {actionsLeft ? (
            <h5 className="home-title">Actions to be completed: {actionsLeft} Actions Left</h5>
          ) : (
            <h5 className="home-congrats">
              CONGRATULATIONS YOU&apos;VE FINISHED ALL OF THE ACTIONS
            </h5>
          )}
          {actionsList?.map((data) => (
            <Action key={data.id} info={data} />
          ))}
        </div>
      )}
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const res = await axios("https://mocki.io/v1/88091a2f-18ab-4954-89e3-b6bbb041b4b0");
  const fetchedActions: SingleAction[] = res.data;
  return {
    props: { fetchedActions },
  };
}
