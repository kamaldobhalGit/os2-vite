import dispatchHttpClient from "../../clients/http/dispatch.client";
import { DispatchCountByStatus } from "../../interfaces/dispatch.interface";
import { DISPATCH_STATUS } from "../../utils/constant";

const tabsLoader = async (): Promise<DispatchCountByStatus> => {
  const { data: dispatchCountData } =
    await dispatchHttpClient.fetchDispatchCount();
  // Group counts by status
  console.log("dispatchCountData....", dispatchCountData);
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
