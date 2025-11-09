import React from "react";
import "./Sidebar.css";
function Sidebar({ activePage, setActivePage }) {
  const menu = ["Overview", "SolidityTest"];

  return (
    <div className="sidebar">
      <h2>Eth Safari Hackathon</h2>
      {menu.map((item, idx) => (
        <div
          key={idx}
          className={`menu-item ${activePage === item ? "active" : ""}`}
          onClick={() => setActivePage(item)}
        >
          {item}
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
