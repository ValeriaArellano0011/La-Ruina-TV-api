import React from "react";
import s from "./css/GoogleAuth.module.css";
import googleIcon from "../../design/google-icon.png";

export default function GoogleSignUp() {
  return (
    <div>
      <ul className={s.contGoogleAuth}>
          <a
            className={s.googleBtn}
           href="https://la-ruina-api.fly.dev/auth"
          >
              <img
                src={googleIcon}
                height="40px"
                className={s.googleImg}
                alt="sign up with google"
              />

          </a>
      </ul>
    </div>
  );
}
