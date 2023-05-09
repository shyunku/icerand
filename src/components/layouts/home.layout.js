import { Outlet } from "react-router-dom";
import "./home.layout.scss";

const HomeLayout = () => {
  return (
    <div className="home-layout">
      <div className="menu-list">
        <div className="menu-item">룰렛</div>
        <div className="menu-item">그래프</div>
        <div className="menu-item">블랙잭</div>
        <div className="menu-item">7포커</div>
      </div>
      <div className="content">
        <div className="outlet">
          <Outlet />
        </div>
        <div className="footer">
          <div className="label">총 자산</div>
          <div className="value">238억 2405만 2000원</div>
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
