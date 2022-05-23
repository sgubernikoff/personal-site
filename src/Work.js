import { React, useState } from "react";
import Tilt from "react-parallax-tilt";
import kanye from "./kanye.png";
import leaf from "./littleleaf.png";
import earn from "./earn.png";
import groupie from "./groupie.png";
import opaque from "./opaque.png";
import { Typewriter } from "react-teffex";

function Work() {
  const [detail, setDetail] = useState(true);
  const [detail2, setDetail2] = useState(true);
  const [detail3, setDetail3] = useState(true);
  const [detail4, setDetail4] = useState(true);

  function enterYe() {
    setDetail(false);
    setDetail2(true);
    setDetail3(true);
    setDetail4(true);
  }

  function exitYe() {
    setDetail(true);
    setDetail2(true);
    setDetail3(true);
    setDetail4(true);
  }
  function enterLeaf() {
    setDetail(true);
    setDetail2(false);
    setDetail3(true);
    setDetail4(true);
  }

  function exitLeaf() {
    setDetail(true);
    setDetail2(true);
    setDetail3(true);
    setDetail4(true);
  }
  function enterGroup() {
    setDetail(true);
    setDetail2(true);
    setDetail3(false);
    setDetail4(true);
  }

  function exitGroup() {
    setDetail(true);
    setDetail2(true);
    setDetail3(true);
    setDetail4(true);
  }
  function enterEarn() {
    setDetail(true);
    setDetail2(true);
    setDetail3(true);
    setDetail4(false);
  }

  function exitEarn() {
    setDetail(true);
    setDetail2(true);
    setDetail3(true);
    setDetail4(true);
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
          {/* <h2>Keeping Up With Kanye</h2> */}
          <div className="projects">
            {!detail ? (
              <div
                className="details"
                onMouseEnter={() => enterYe()}
                onMouseLeave={() => exitYe()}
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
              onMouseLeave={() => exitYe()}
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
                onMouseLeave={() => exitLeaf()}
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
              onMouseLeave={() => exitLeaf()}
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
                onMouseLeave={() => exitGroup()}
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
              onMouseLeave={() => exitGroup()}
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
                onMouseLeave={() => exitEarn()}
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
              onMouseLeave={() => exitEarn()}
            />
          </div>
        </Tilt>
      </div>
    </div>
  );
}

export default Work;
