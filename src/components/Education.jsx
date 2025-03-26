import React, { useEffect, useRef } from 'react';
import '../styles/Education.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Education() {
    const timelineRef = useRef(null);

  const timelineData = [
    {
      category: "Education",
      items: [
        {
          year: "2015 - 2021",
          title: "Elementary School",
          description: "At Candra Jaya Elementary School"
        },
        {
          year: "2021 - 2024",
          title: "Junior High School",
          description: "At Candra Jaya Middle School"
        },
        {
          year: "2024 - 2027",
          title: "Senior High School",
          description: "At Tri Ratna Vocational School"
        }
      ]
    },
  ];

  useEffect(() => {

    gsap.fromTo(
      timelineRef.current.children,
      { opacity: 0, y: 50 }, 
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 80%", 
          end: "bottom 20%", 
          toggleActions: "play none none reverse", 
        },
      }
    );
  }, []);

  return (
    <div className="timeline" ref={timelineRef}>
      {timelineData.map((section, index) => (
        <div key={index} className="timeline-section">
          <h2>{section.category}</h2>
          {section.items.map((item, idx) => (
            <div key={idx} className="timeline-item">
              <span className="year">{item.year}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Education;