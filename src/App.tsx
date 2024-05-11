import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";

import "./App.css";
import LoginLoader from "./components/login/loader";
import Login from "./components/login/login";
import { loginAction } from "./components/login/loginAction";
import Table from "./components/table/table";
import tableLoader from "./components/table/tablerLoader";
import Tabs from "./components/tabs/tabs";
import tabsLoader from "./components/tabs/tabsLoader";
import TopNav from "./components/topNav/topNav";
import { DISPATCH_STATUS } from "./utils/constant";
import { validateUserAuthentication } from "./utils/helper";

interface LoaderArgs {
  params: LoaderParams;
}

interface LoaderParams {
  currentTab?: DISPATCH_STATUS;
  size?: string;
}

const router = createBrowserRouter([
  {
    id: "home",
    path: "/home",
    loader: () => {
      if (!validateUserAuthentication()) return redirect("/login");
      return tabsLoader();
    },
    element: (
      <>
        <TopNav />
        <Tabs />
      </>
    ),
    children: [
      {
        path: "", // this child is added to handle default listing
        loader: async (loader: LoaderArgs) => {
          return await tableLoader(
            loader.params.currentTab ||
              (DISPATCH_STATUS.CREATED as DISPATCH_STATUS),
            loader.params.size
          );
        },
        Component: Table,
      },
      {
        path: ":currentTab/:size", // this child is added to handle listing with different status
        loader: async (loader: LoaderArgs) => {
          if (!validateUserAuthentication()) redirect("/login");
          return await tableLoader(
            loader.params.currentTab ||
              (DISPATCH_STATUS.CREATED as DISPATCH_STATUS),
            loader.params.size
          );
        },
        Component: Table,
      },
    ],
  },
  {
    path: "/dispatch/:size", //this route is added to test navbar with two differtent UI, dispatch count tab dont show up here
    loader: async (loader: LoaderArgs) => {
      return await tableLoader(DISPATCH_STATUS.CREATED, loader.params.size);
    },
    element: (
      <>
        <TopNav />
        <Table />
      </>
    ),
  },
  {
    id: "root",
    path: "/",
    loader: () => {
      if (!validateUserAuthentication()) redirect("/login");
      return redirect("/home");
    },
  },
  {
    path: "/login",
    action: loginAction,
    loader: LoginLoader,
    Component: Login,
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider
        router={router}
        fallbackElement={<p>Initial Load...</p>}
      />
    </>
  );
}
