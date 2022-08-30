import { React, useState } from "react";
import Tilt from "react-parallax-tilt";
import kanye from "./kanye.png";
import leaf from "./littleleaf.png";
import earn from "./earn.png";
import groupie from "./groupie.png";
import talve from "./talvesteel.png";
import opaque from "./opaque.png";
import { Typewriter } from "react-teffex";

function Work() {
  const [detail, setDetail] = useState(true);
  const [detail2, setDetail2] = useState(true);
  const [detail3, setDetail3] = useState(true);
  const [detail4, setDetail4] = useState(true);
  const [detail5, setDetail5] = useState(true);

  function enterYe() {
    setDetail(false);
    setDetail2(true);
    setDetail3(true);
    setDetail4(true);
    setDetail5(true);
  }

  function enterLeaf() {
    setDetail(true);
    setDetail2(false);
    setDetail3(true);
    setDetail4(true);
    setDetail5(true);
  }

  function enterGroup() {
    setDetail(true);
    setDetail2(true);
    setDetail3(false);
    setDetail4(true);
    setDetail5(true);
  }

  function enterEarn() {
    setDetail(true);
    setDetail2(true);
    setDetail3(true);
    setDetail4(false);
    setDetail5(true);
  }

  function enterSteel() {
    setDetail(true);
    setDetail2(true);
    setDetail3(true);
    setDetail4(true);
    setDetail5(false);
  }

  function exitGroups() {
    setDetail(true);
    setDetail2(true);
    setDetail3(true);
    setDetail4(true);
    setDetail5(true);
  }

  return (
    <div id="work">
      <h1 className="contact-name">
        <Typewriter
          typeSettings={{ initialDelay: 1000 }}
          text={""}
          cycle={["WORK"]}
          cycleDelay={3000}
          loop
        />
      </h1>
      <div className="work-hold">
        <Tilt className="tilt">
          {/* <h2>Earn A-Way</h2> */}
          <div className="projects">
            {!detail5 ? (
              <div
                className="details"
                onMouseEnter={() => enterSteel()}
                onMouseLeave={() => exitGroups()}
              >
                {" "}
                <div className="links-hold">
                  <img src={opaque} className="opaque" />
                  <a
                    className="links"
                    href="https://www.anchorstainless.com"
                    target="_blank"
                  >
                    Demo
                  </a>
                  <a
                    className="links"
                    href="https://github.com/sgubernikoff/Talve-Steel"
                    target="_blank"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            ) : null}
            <img
              className="ye"
              src={talve}
              onMouseEnter={() => enterSteel()}
              onMouseLeave={() => exitGroups()}
            />
          </div>
        </Tilt>
        <Tilt className="tilt">
          {/* <h2>Keeping Up With Kanye</h2> */}
          <div className="projects">
            {!detail ? (
              <div
                className="details"
                onMouseEnter={() => enterYe()}
                onMouseLeave={() => exitGroups()}
              >
                {" "}
                <div className="link-hold">
                  <img src={opaque} className="opaque" />
                  <a
                    className="link"
                    href="https://keeping-up-with-kanye.herokuapp.com/"
                    target="_blank"
                  >
                    Demo
                  </a>
                  <a
                    className="link"
                    href="https://github.com/deanscottg/Phase-2-project"
                    target="_blank"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            ) : null}
            <img
              className="ye"
              src={kanye}
              onMouseEnter={() => enterYe()}
              onMouseLeave={() => exitGroups()}
            />
          </div>
        </Tilt>
        <Tilt className="tilt">
          {/* <h2>Little Leaf</h2> */}
          <div className="projects">
            {!detail2 ? (
              <div
                className="details"
                onMouseEnter={() => enterLeaf()}
                onMouseLeave={() => exitGroups()}
              >
                {" "}
                <div className="link-hold">
                  <img src={opaque} className="opaque" />
                  <a
                    className="link"
                    href="https://little-leaf-garden.herokuapp.com/"
                    target="_blank"
                  >
                    Demo
                  </a>
                  <a
                    className="link"
                    href="https://github.com/sgubernikoff/little-leaf-garden"
                    target="_blank"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            ) : null}
            <img
              className="ye"
              src={leaf}
              onMouseEnter={() => enterLeaf()}
              onMouseLeave={() => exitGroups()}
            />
          </div>
        </Tilt>
        <Tilt className="tilt">
          {/* <h2>Groupie</h2> */}
          <div className="projects">
            {!detail3 ? (
              <div
                className="details"
                onMouseEnter={() => enterGroup()}
                onMouseLeave={() => exitGroups()}
              >
                {" "}
                <div className="links-hold">
                  <img src={opaque} className="opaque" />
                  {/* <a
                    className="links"
                    href="https://keeping-up-with-kanye.herokuapp.com/"
                    target="_blank"
                  >
                    Demo
                  </a> */}
                  <a
                    className="links"
                    href="https://github.com/sgubernikoff/Frontend-Concerts"
                    target="_blank"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            ) : null}
            <img
              className="ye"
              src={groupie}
              onMouseEnter={() => enterGroup()}
              onMouseLeave={() => exitGroups()}
            />
          </div>
        </Tilt>
        <Tilt className="tilt">
          {/* <h2>Earn A-Way</h2> */}
          <div className="projects">
            {!detail4 ? (
              <div
                className="details"
                onMouseEnter={() => enterEarn()}
                onMouseLeave={() => exitGroups()}
              >
                {" "}
                <div className="links-hold">
                  <img src={opaque} className="opaque" />
                  <a
                    className="links"
                    href="https://earn-a-way.herokuapp.com"
                    target="_blank"
                  >
                    Demo
                  </a>
                  <a
                    className="links"
                    href="https://github.com/sgubernikoff/SZ-Games"
                    target="_blank"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            ) : null}
            <img
              className="ye"
              src={earn}
              onMouseEnter={() => enterEarn()}
              onMouseLeave={() => exitGroups()}
            />
          </div>
        </Tilt>
      </div>
    </div>
  );
}

export default Work;
