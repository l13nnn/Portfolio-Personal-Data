import React from "react";
import "../styles/Skills.css"; 
import HTML from "../assets/Foto__4_-removebg-preview.png";

const skills = [
  { name: "HTML", icon: HTML, level: 90 },
  { name: "CSS", icon: "path/to/css-icon.png", level: 80 },
  { name: "JavaScript", icon: "path/to/js-icon.png", level: 50 },
  { name: "Canva Editing", icon: "path/to/canva-icon.png", level: 95 },
  { name: "Video Editing", icon: "path/to/video-editing-icon.png", level: 85 },
  { name: "Social Media Manager", icon: "path/to/social-media-icon.png", level: 95 },
];

function Skill()  {
  return (
    <div className="skill-set">
      <h2>Skill Set</h2>
      {skills.map((skill, index) => (
        <div key={index} className="skill">
          <img src={skill.icon} alt={`${skill.name} icon`} className="skill-icon" />
          <span className="skill-name">{skill.name}</span>
          <div className="skill-bar">
            <div className="skill-level" style={{ width: `${skill.level}%` }}></div>
          </div>
          <span className="skill-percentage">{skill.level}%</span>
        </div>
      ))}
    </div>
  );
};

export default Skill;