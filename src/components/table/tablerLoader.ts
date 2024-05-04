import dispatchHttpClient from "../../clients/http/dispatch.client";
import { Dispatch } from "../../interfaces/dispatch.interface";
import { DISPATCH_STATUS } from "../../utils/constant";

const tableLoader = async (
  currentTab: DISPATCH_STATUS,
  limit = "10"
): Promise<Dispatch[]> => {
  const dispatchList = await dispatchHttpClient.fetchDispatchList(
    currentTab,
    "0",
    limit
  );
  return dispatchList.map((dispatch) => {
    return {
      ...dispatch,
      modifiedCreated: new Date(dispatch.createdAt).toDateString(),
    };
  });
};

export default tableLoader;
