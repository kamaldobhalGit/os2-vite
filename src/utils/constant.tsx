export enum DISPATCH_STATUS {
  CREATED = "CREATED",
  IN_PROGRESS = "IN_PROGRESS",
  CLOSED = "CLOSED",
}

export enum DISPATCH_STATUS_LABEL {
  CREATED = "CREATED",
  IN_PROGRESS = "IN PROGRESS",
  CLOSED = "CLOSED"
}

export const BASE_URLS = {
  DISPATCH_SERVICE: 'http://localhost:3001/dispatch',
  LOGIN_SERVICE: 'http://localhost:3001/login'
}