import { React, useState, useEffect } from "react";
import tv from "./tv.png";
import sign from "./sign.png";
import { Glitch } from "react-teffex";
import { Typewriter } from "react-teffex";

function Homepage() {
  const [blur, setBlur] = useState(true);

  function enterTV() {
    setBlur(false);
  }

  function exitTV() {
    setBlur(true);
  }

  let myGlitchEffects4 = (
    <div>
      <Glitch dontGlitch={true} text={"Samuel Ethan Gubernikoff"} />
    </div>
  );

  return (
    <div id="home">
      <div className="sam-name">
        <h1>
          <Typewriter
            typeSettings={{ initialDelay: 1000 }}
            text={""}
            cycle={["SAM GUBERNIKOFF"]}
            cycleDelay={3000}
            loop
          />
        </h1>
        {/* <h1>SAM GUBERNIKOFF</h1> */}
        <div className="tv-hold">
          <img
            src={tv}
            className="tv"
            onMouseEnter={() => enterTV()}
            onMouseLeave={() => exitTV()}
          />
          {/* <div className="static-hold"> */}
          {blur ? (
            <img
              className="static"
              src="https://c.tenor.com/Ndw-4OdKwo0AAAAC/tv-static.gif"
            />
          ) : (
            <div className="static-none">
              <h3 className="samuel-head">{myGlitchEffects4}</h3>
              <p className="samuel">
                I'm a web developer based in Brooklyn, New York. I am Flatiron
                School graduate from the Full Stack Software Engineering
                Program. My skills include, but are not limited to, Javascript,
                React, Ruby on Rails, CSS. <br></br>
                <br></br>Before that, I was working in Marketing as a Media
                Buyer for Coca Cola and Exxon Mobil. When I'm not coding, I
                spend my time refining my wardrobe and playing basketball &
                soccer.
              </p>
              <img className="sign" src={sign}></img>
            </div>
          )}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
