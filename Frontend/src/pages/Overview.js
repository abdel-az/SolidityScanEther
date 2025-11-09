import "./Overview.css"
import React from "react";

function Overview() {
  const courses = [
    { title: "Introduction to Blockchain", level: "Beginner" },
    { title: "Smart Contracts Basics", level: "Intermediate" },
    { title: "Solidity Functions & Variables", level: "Intermediate" },
    { title: "Security and Vulnerabilities", level: "Advanced" },
  ];

  return (
    <div>
      <h1>Overview</h1>
      <p>This section provides a summary of available learning materials:</p>

      <ul style={{ marginTop: "20px" }}>
        {courses.map((course, index) => (
          <li
            key={index}
            style={{
              marginBottom: "12px",
              padding: "10px 12px",
              background: "#f7f7f7",
              borderRadius: "5px",
              border: "1px solid #ddd",
            }}
          >
            <strong>{course.title}</strong> — {course.level}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Overview;
