import React from "react";
import Overview from "./pages/Overview";
import SolidityTest from "./pages/SolidityTest";
import "./Content.css";

function Content({ activePage }) {
  const components = {
    Overview: <Overview />,
    SolidityTest: <SolidityTest />,
    
  };

  return (
    <div className="content">
      {components[activePage]}
    </div>
  );
}

export default Content;
