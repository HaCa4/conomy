import Link from "next/link";
import React, { useContext } from "react";

import { ActionsContext } from "../utilities/store/actionsContext";

const NavBar = () => {
  const { earnedPoints } = useContext(ActionsContext);

  return (
    <div className="navbar">
      <Link href={"/"}>
        <span className="navbar-logo">
          TestCase <strong> APP </strong>
        </span>
      </Link>
      <Link href={"/mypoints"}>
        <div className="navbar-points-button">Earned Points: {earnedPoints} </div>
      </Link>
    </div>
  );
};

export default NavBar;
