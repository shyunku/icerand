import { Outlet } from "react-router-dom";
import "./root.layout.scss";

const RootLayout = () => {
  return (
    <div className="root-layout">
      <div className="child-content-wrapper">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
