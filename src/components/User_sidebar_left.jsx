import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";


const User_sidebar_left = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  // 根據當前路徑獲取顯示文字
  const getCurrentPageName = () => {
    switch (location.pathname) {
      case "/My_footprint":
        return "我的足跡";
      case "/Notifications":
        return "訊息通知";
      case "/Order_management":
        return "訂單管理";
      default:
        return "選單";
    }
  };


  const menuItems = [
    { path: "/My_footprint", label: "我的足跡" },
    { path: "/Notifications", label: "訊息通知" },
    { path: "/Order_management", label: "訂單管理" },
  ];


  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };


  return (
    <>
      {/* 桌面版側邊欄（原本的設計） */}
      <aside className="user_sidebar_left">
        <Link to={"/My_footprint"} className="sidebar_item">
          <div
            className={`pageToggle ${
              location.pathname === "/My_footprint" ? "active" : ""
            }`}
          ></div>
          <p>我的足跡</p>
        </Link>
        <Link to={"/Notifications"} className="sidebar_item">
          <div
            className={`pageToggle ${
              location.pathname === "/Notifications" ? "active" : ""
            }`}
          ></div>
          <p>訊息通知</p>
        </Link>
        <Link to={"/Order_management"} className="sidebar_item">
          <div
            className={`pageToggle ${
              location.pathname === "/Order_management" ? "active" : ""
            }`}
          ></div>
          <p>訂單管理</p>
        </Link>
      </aside>


      {/* 手機/平板版下拉選單 */}
      <div className="mobile_dropdown">
        <button
          className="dropdown_toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span>{getCurrentPageName()}</span>
          <span className={`arrow ${isMenuOpen ? "open" : ""}`}>▼</span>
        </button>


        {isMenuOpen && (
          <div className="dropdown_menu">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`dropdown_item ${
                  location.pathname === item.path ? "active" : ""
                }`}
                onClick={handleLinkClick}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};


export default User_sidebar_left;



