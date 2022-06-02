import React from "react";
import html from "./html5.png";
import css from "./css.png";
import js from "./js.png";
import react from "./react.png";
import ruby from "./ruby.png";
import rails from "./rails.png";
import ps from "./ps.png";
import { Typewriter } from "react-teffex";

function Skills() {
  const skills = [ruby, rails, ps, react, html, css, js];
  const skillIcons = skills.map((s) => (
    <img
      className="skill-icons"
      key={skills.indexOf(s)}
      src={s}
      alt={"skill icon"}
    />
  ));
  return (
    <div id="skills" className="flush-up">
      <h1 className="contact-name">
        <Typewriter
          typeSettings={{ initialDelay: 1000 }}
          text={""}
          cycle={["SKILLS"]}
          cycleDelay={3000}
          loop
        />
      </h1>
      <div className="skills-container">{skillIcons}</div>
    </div>
  );
}

export default Skills;
