import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import sam from "./seg.png";
import linked from "./linkedin.png";
import git from "./github.png";
import resume from "./resume.png";
import diamond from "./diamond.png";
import res from "./SamGubernikoffResume.pdf";

function NavBar() {
  return (
    <div className="bar">
      <img className="seg" src={sam} />
      <nav className="navbar">
        <div className="navlink-holder">
          <Link
            className="nav-element"
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            HOME
          </Link>
          <img src={diamond} className="diamond" />
          <Link
            className="nav-element"
            activeClass="active"
            to="work"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            WORK
          </Link>
          <img src={diamond} className="diamond" />
          <Link
            className="nav-element"
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            SKILLS
          </Link>
          <img src={diamond} className="diamond" />
          <Link
            className="nav-element"
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            CONTACT
          </Link>
          <div className="icon-holder">
            <a
              target="_blank"
              className="handle"
              href="https://www.linkedin.com/in/sam-gubernikoff-677145149/"
            >
              <img src={linked} className="nav-icon" />
            </a>
            <a target="_blank" className="handle" href={res}>
              <img src={resume} className="nav-icon" />
            </a>
            <a
              target="_blank"
              className="handle"
              href="https://github.com/sgubernikoff"
            >
              <img src={git} className="nav-icon" />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
