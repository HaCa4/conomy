import React from "react";
import { useRouter } from "next/router";

const CongratsCard: React.FC = () => {
  const router = useRouter();

  return (
    <div className="card-notification">
      <img className="congrats-image" src="/Checked.png" />
      <p className="notification-card-title">Congratulations!</p>
      <p className="notification-card-content">
        You&apos;ve earned points for your participation!
        <br />
        Keep Up the great work!
      </p>
      <div className="notification-card-button" onClick={() => router.push("/")}>
        Close
      </div>
    </div>
  );
};

export default CongratsCard;
