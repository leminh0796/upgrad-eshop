import NavigationBar from "components/navigationBar/NavigationBar";
import { Outlet } from "react-router-dom";

export default function RootScreen() {
  return (
    <>
      <NavigationBar />
      <Outlet />
    </>
  );
}
