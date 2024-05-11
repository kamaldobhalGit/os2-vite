import { redirect } from "react-router-dom";
import dispatchHttpClient from "../../clients/http/dispatch.client";
import { Dispatch } from "../../interfaces/dispatch.interface";
import { DISPATCH_STATUS } from "../../utils/constant";
import { validateUserAuthentication } from "../../utils/helper";

const tableLoader = async (
  currentTab: DISPATCH_STATUS,
  limit = "3"
): Promise<Dispatch[]> => {
  if (!validateUserAuthentication()) return redirect("/login") as any;
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
