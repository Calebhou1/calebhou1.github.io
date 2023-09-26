import React, { useState } from "react";
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
    <div>
      <h3>Password Required</h3>
      <p>Please contact me for the password to view this case study</p>
      <form onSubmit={checkPassword}>
        <input
          type="password"
          name="password"
          value={password}
          className={errorState ? "error" : ""}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="Enter" />
      </form>
    </div>
  );
};

export default AuthScreen;
