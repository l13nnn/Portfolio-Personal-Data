import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/Skills.css"; 
import HTML from "../assets/Foto__4_-removebg-preview.png";
import CSS from "../assets/artikel-tentang-css3-nyingspot.com_-removebg-preview.png";
import JS from "../assets/JavaScript-Logo.png";
import CANVA from "../assets/images__1_-removebg-preview.png";
import CAPCUT from "../assets/image-removebg-preview.png";
import TIKTOK from "../assets/logo-tiktok-l-min-removebg-preview.png";

gsap.registerPlugin(ScrollTrigger)

const skills = [
  { name: "HTML", icon: HTML, level: 100 },
  { name: "CSS", icon: CSS, level: 100 },
  { name: "JavaScript", icon: JS, level: 100 },
  { name: "Canva Editing", icon: CANVA, level: 100 },
  { name: "Video Editing", icon: CAPCUT, level: 100 },
  { name: "Social Media Manager", icon: TIKTOK, level: 100 },
];

function Skill()  {
    const skillSetRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
          skillSetRef.current.children,
          { opacity: 0, y: 50 }, 
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.3,
            ease: "power2.out",
            scrollTrigger: {
              trigger: skillSetRef.current,
              start: "top 80%", 
              end: "bottom 20%", 
              toggleActions: "play none none reverse", 
            },
          }
        );
    
        const skillLevels = document.querySelectorAll(".skill-level");

        skillLevels.forEach((level) => {
          gsap.fromTo(
            level,
            { scaleX: 0 },
            { 
              scaleX: 1,
              duration: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: level,
                start: "top 90%",
                toggleActions: "play none none reverse",
              },
            }
          );
        });

        const skillIcons = document.querySelectorAll(".skill-icon");

        skillIcons.forEach((icon) => {
            icon.addEventListener("mouseover", () => {
                gsap.to(icon, { scale: 1.2, duration: 0.3, ease: "power2.out" });
            });
            icon.addEventListener("mouseout", () => {
                gsap.to(icon, { scale: 1, duration: 0.3, ease: "power2.out" });
            });
        });

        return () => {
            skillIcons.forEach((icon) => {
                icon.removeEventListener("mouseover", () => {
                    gsap.to(icon, { scale: 1.2 });
                });
                icon.removeEventListener("mouseout", () => {
                    gsap.to(icon, { scale: 1 });
                });
            });
        };
    }, []);

  return (
    <div className="skill-set" ref={skillSetRef}>
      <h2>Skill Set</h2>
      {skills.map((skill, index) => (
        <div key={index} className="skill">
          <img src={skill.icon} alt={`${skill.name} icon`} className="skill-icon" />
          <span className="skill-name">{skill.name}</span>
          <div className="skill-bar">
            <div className="skill-level" style={{ width: `${skill.level}%` }}></div>
          </div>
          <span className="skill-percentage">⭐</span>
        </div>
      ))}
    </div>
  );
};

export default Skill;