import { React, useState, useEffect } from "react";
import tv from "./tv.png";
import tv2 from "./tv2.png";
import { Glitch } from "react-teffex";
import { Typewriter } from "react-teffex";
import sam from "./sam.png";

function Homepage() {
  const [blur, setBlur] = useState(true);

  function enterTV() {
    setBlur(false);
  }

  function exitTV() {
    setBlur(true);
  }

  // const names = ["Y", "M", "M", "A"];

  // function joinArray(arr) {
  //   arr.push("S");
  //   let backward = arr.reverse();
  //   let newArr = backward.join(" :) ");
  //   console.log(newArr);
  // }

  // joinArray(names);

  let myGlitchEffects4 = (
    <div>
      <Glitch dontGlitch={true} text={"Samuel Ethan Gubernikoff"} />
    </div>
  );

  return (
    <div id="home">
      <div className="homepage">
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
        </div>
        {/* <h1>SAM GUBERNIKOFF</h1> */}
        <div className="tv-hold">
          <img
            src={blur ? tv : tv2}
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
                I'm a freelance software engineer based in Brooklyn, New York. I
                am certified in Full Stack Software Engineering from the
                Flatiron School. My skills include, but are not limited to,
                Javascript, HTML, React, Ruby, Ruby on Rails, Photoshop, & CSS.{" "}
                <br></br>
                <br></br>Before my time as a developer, I was working in the
                marketing industry as a Media Buyer for Coca Cola and Exxon
                Mobil. When I'm not coding, I spend my time refining my
                wardrobe, watching the Mets, laughing with friends, and playing
                basketball.
              </p>
              <div className="pic_hold_sam">
                <img src={sam} className="sam_pic" />
              </div>
            </div>
          )}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
