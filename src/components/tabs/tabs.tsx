import { useState } from "react";
import {
  Outlet,
  useLoaderData,
  useNavigate,
  useParams,
} from "react-router-dom";
import { DispatchCountByStatus } from "../../interfaces/dispatch.interface";
import { DISPATCH_STATUS } from "../../utils/constant";
import "./tabs.css";

export default function Tabs() {
  const [currentTab, setCurrentTab] = useState(DISPATCH_STATUS.CREATED);
  let countsByStatus = useLoaderData() as DispatchCountByStatus;

  const navigate = useNavigate();
  let { size } = useParams();

  const handleClick = (status: DISPATCH_STATUS): undefined => {
    setCurrentTab(status);
    navigate(`/home/${status}/${size || "3"}`); //to reload the count when tab changes
    return undefined;
  };

  return (
    <div className="tabs">
      <button
        className={currentTab === DISPATCH_STATUS.CREATED ? "active" : ""}
        onClick={() => handleClick(DISPATCH_STATUS.CREATED)}
      >
        {DISPATCH_STATUS.CREATED}
        <br />
        {countsByStatus.CREATED}
      </button>
      <button
        className={currentTab === DISPATCH_STATUS.IN_PROGRESS ? "active" : ""}
        onClick={() => handleClick(DISPATCH_STATUS.IN_PROGRESS)}
      >
        {DISPATCH_STATUS.IN_PROGRESS}
        <br />
        {countsByStatus.IN_PROGRESS}
      </button>
      <button
        className={currentTab === DISPATCH_STATUS.CLOSED ? "active" : ""}
        onClick={() => handleClick(DISPATCH_STATUS.CLOSED)}
      >
        {DISPATCH_STATUS.CLOSED}
        <br />
        {countsByStatus.CLOSED}
      </button>
      <Outlet />
    </div>
  );
}
