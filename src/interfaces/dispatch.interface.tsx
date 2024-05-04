import { DISPATCH_STATUS } from "../utils/constant";

export interface Dispatch {
  id: number;
  name: string;
  createdAt: number;
  status: DISPATCH_STATUS;
  totalOrders: number;
  modifiedCreated?: Date | string;
}

export interface FetchDispatchListResponse {
  status: true;
  data: Dispatch[];
}

export interface FetchDispatchCountResponse {
  status: true;
  data: DispatchCount[];
}

interface DispatchCount {
  status: DISPATCH_STATUS;
  count: number;
}

export interface DispatchCountByStatus {
  [DISPATCH_STATUS.CREATED]: number;
  [DISPATCH_STATUS.IN_PROGRESS]: number;
  [DISPATCH_STATUS.CLOSED]: number;
}