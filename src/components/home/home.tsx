import { useRouteLoaderData } from "react-router-dom";

export default function Home() {
  let { message } = useRouteLoaderData("home") as { message: string };
  return <p>{message}</p>;
}
