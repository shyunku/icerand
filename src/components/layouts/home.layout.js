import { Outlet } from "react-router-dom";
import "./home.layout.scss";
import { fastInterval, formatKoUnit } from "static/scripts/Util";
import BigNumber from "bignumber.js";
import { useEffect, useState } from "react";

const HomeLayout = () => {
  const [money, setMoney] = useState(BigNumber(150));

  useEffect(() => {
    fastInterval(() => {
      setMoney((prev) => prev.multipliedBy(1.001));
    }, 30);
  }, []);

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
          <div className="value">{formatKoUnit(money.integerValue())} 원</div>
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
