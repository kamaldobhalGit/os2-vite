import { redirect } from "react-router-dom";
import dispatchHttpClient from "../../clients/http/dispatch.client";
import { DispatchCountByStatus } from "../../interfaces/dispatch.interface";
import { DISPATCH_STATUS } from "../../utils/constant";
import { validateUserAuthentication } from "../../utils/helper";

const tabsLoader = async (): Promise<DispatchCountByStatus> => {
  if (!validateUserAuthentication()) redirect("/login");
  const { data: dispatchCountData } =
    await dispatchHttpClient.fetchDispatchCount();
  // Group counts by status
  const countsByStatus = {
    [DISPATCH_STATUS.CREATED]: dispatchCountData
      .filter((countData) => countData.status === DISPATCH_STATUS.CREATED)
      .reduce((acc, curr) => acc + curr.count, 0),
    [DISPATCH_STATUS.IN_PROGRESS]: dispatchCountData
      .filter((countData) => countData.status === DISPATCH_STATUS.IN_PROGRESS)
      .reduce((acc, curr) => acc + curr.count, 0),
    [DISPATCH_STATUS.CLOSED]: dispatchCountData
      .filter((countData) => countData.status === DISPATCH_STATUS.CLOSED)
      .reduce((acc, curr) => acc + curr.count, 0),
  };
  return countsByStatus;
};

export default tabsLoader;
