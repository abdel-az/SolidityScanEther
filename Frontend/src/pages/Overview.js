// import "./Overview.css"
// import React from "react";

// function Overview() {
//   const courses = [
//     { title: "Introduction ", level: "Project Overview" },
//     { title: "User Interface Overview", level: "Solidity Scan Vulnerability" },
//     // { title: "Application structure", level: "Intermediate" },
//     { title: "Development", level: "Advanced" },
//   ];

//   return (
//     <div>
//       <h1>Overview</h1>
//       <p>This section provides a summary of available learning materials:</p>

//       <ul style={{ marginTop: "20px" }}>
//         {courses.map((course, index) => (
//           <li
//             key={index}
//             style={{
//               marginBottom: "12px",
//               padding: "10px 12px",
//               background: "#f7f7f7",
//               borderRadius: "5px",
//               border: "1px solid #ddd",
//             }}
//           >
//             <strong>{course.title}</strong> — {course.level}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Overview;



import "./Overview.css";
import React, { useState } from "react";

function Overview() {
  const courses = [
    { title: "Introduction", level: "Project Overview", content:"This project presents an AI-powered tool for detecting vulnerabilities in Solidity smart contracts. It uses machine learning and static analysis to identify issues like reentrancy, overflows, and access control flaws. The system enhances security audits by automating detection and providing clear, actionable reports. Designed for developers and auditors, it supports safer and faster smart contract deployment." },
    { title: "Project Objectives", level: "Solidity Scan Vulnerability", content: "This project develops an AI-powered system to automatically detect vulnerabilities in Solidity smart contracts using machine learning and static analysis." },
    { title: "Technology Stack", level: "Tooling", content: "The system uses React.js for the frontend, Node.js with Python microservices for backend ML inference, transformer-based models for code analysis, and data from public smart contracts and audit logs." },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div>
      <h1>Overview</h1>
      <p>This section provides a summary of available learning materials:</p>

      <ul style={{ marginTop: "20px", listStyle: "none", padding: 0 }}>
        {courses.map((course, index) => (
          <li key={index} style={{ marginBottom: "12px" }}>
            <button
              onClick={() => handleClick(index)}
              style={{
                width: "100%",
                textAlign: "left",
                padding: "10px 12px",
                background: "#e0f0ff",
                border: "1px solid #007acc",
                borderRadius: "5px",
                fontWeight: "bold",
                color: "black", // 👈 This ensures the text is black
                cursor: "pointer",
              }}
            >
              {course.title} — {course.level}
            </button>
            {activeIndex === index && (
              <div
                style={{
                  marginTop: "8px",
                  padding: "10px",
                  background: "#f9f9f9",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                }}
              >
                {course.content}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Overview;
