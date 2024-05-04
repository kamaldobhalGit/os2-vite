import axios from "axios";
import {
  Dispatch,
  FetchDispatchCountResponse,
} from "../../interfaces/dispatch.interface";
import { BASE_URLS, DISPATCH_STATUS } from "../../utils/constant";

class DispatchHttpClient {
  async fetchDispatchList(
    status: DISPATCH_STATUS,
    offset: string,
    limit: string
  ): Promise<Dispatch[]> {
    try {
      const { data } = await axios.get(BASE_URLS.DISPATCH_SERVICE, {
        params: {
          offset,
          limit,
          status,
        },
      });
      return data?.data;
    } catch (error) {
      console.log("Error while fetching dispatch list", error);
      throw error;
    }
  }

  async fetchDispatchCount(): Promise<FetchDispatchCountResponse> {
    const { data } = await axios.get(BASE_URLS.DISPATCH_SERVICE + "/count");
    return data;
  }
}

const dispatchHttpClient = new DispatchHttpClient();
export default dispatchHttpClient;
