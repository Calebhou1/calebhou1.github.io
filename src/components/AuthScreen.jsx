import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/AuthScreen.scss";

const CORRECT_PASSWORD = "calebhouportfolio";

const AuthScreen = ({ onAuth }) => {
  const [password, setPassword] = useState("");
  const [errorState, setErrorState] = useState(false);

  const checkPassword = (e) => {
    e.preventDefault();

    if (password === CORRECT_PASSWORD) {
      onAuth();
    } else {
      setErrorState(true);
    }
  };

  return (
    <div className="AuthScreen__container">
      <Link to="/" className="back button">
        BACK
      </Link>
      <div className="AuthScreen">
        <div className="AuthScreen__header">
          <h3 className="AuthScreen__title">PASSWORD REQUIRED</h3>
          <p>Please contact me for the password to view this case study.</p>
        </div>
        <form onSubmit={checkPassword}>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              className={errorState ? "error" : ""}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errorState ? (
              <p className="AuthScreen__errormsg">Incorrect password</p>
            ) : null}
          </div>
          <input type="submit" className="button button-yellow" value="ENTER" />
        </form>
      </div>
    </div>
  );
};

export default AuthScreen;
