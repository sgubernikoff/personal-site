import { React, useState } from "react";
import { Typewriter } from "react-teffex";
import sign from "./sign.png";

function Contact() {
  const FORM_ENDPOINT =
    "https://public.herotofu.com/v1/3ac0f200-d841-11ec-9d7b-556d531b7d73";

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  return (
    <div id="contact">
      <h1 className="contact-name">
        <Typewriter
          typeSettings={{ initialDelay: 1000 }}
          text={""}
          cycle={["CONTACT"]}
          cycleDelay={3000}
          loop
        />
      </h1>

      {submitted ? (
        <div className="thankyou">
          <h2>Thank you!</h2>
          <div>We'll be in touch soon.</div>
        </div>
      ) : (
        <div>
          <form
            id="my-form"
            action={FORM_ENDPOINT}
            onSubmit={handleSubmit}
            method="POST"
            target="_blank"
          >
            <div className="connect">Let's Connect!</div>
            <input
              className="form"
              type="text"
              placeholder="Your name"
              name="name"
              required
            />

            <input
              className="form"
              type="email"
              placeholder="Email"
              name="email"
              required
            />

            <textarea
              className="form"
              placeholder="Your message"
              name="message"
              required
            />

            <button type="submit"> Submit </button>
          </form>
        </div>
      )}
      <div className="sign_hold">
        <img className="sign" src={sign}></img>
      </div>
    </div>
  );
}

export default Contact;
