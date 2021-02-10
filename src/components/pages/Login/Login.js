import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import LoadingSpinner from "../../common/LoadingSpinner/LoadingSpinner";
import ROUTES from "../../../utils/routes";

function Login({
  currentUser,
  isLoggingIn,
  isAuthenticated,
  loginError,
  signout,
  login,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [innerLoginError, setInnerLoginError] = useState(loginError);
  function handleSubmit(e) {
    e.preventDefault();

    if (email !== "" && password !== "") {
      login(email, password);
    } else {
      setInnerLoginError("You must enter an email and a password");
    }
  }
  function handleGoogleClick(e) {
    e.preventDefault();
    login();
  }
  function handleSignoutClick(e) {
    e.preventDefault();
    signout();
  }
  if (isAuthenticated) {
    return <Redirect to={ROUTES.DASHBOARD} />;
  }

  return (
    <main className="container d-flex flex-column flex-shrink-0 flex-grow-1">
      {isLoggingIn ? (
        <LoadingSpinner />
      ) : (
        <div className="row justify-content-sm-center align-items-sm-center flex-grow-1">
          <section
            className="Form col-md-8 col-xl-6 mx-sm-auto rounded p-sm-5"
            style={{
              textAlign: "center",
              maxWidth: "19rem",
              margin: "100px auto 0 0",
            }}
          >
            <header>
              <h1 className="h2 pt-5 pt-sm-2 pb-4">Admin Log in</h1>
            </header>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                {/* <label htmlFor="email">Email</label>*/}
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                {/*<label htmlFor="password">Contraseña</label>*/}
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Button type="submit" variant="primary" className="mb-2">
                Sign In
              </Button>
              <Button
                type="button"
                variant="primary"
                onClick={handleGoogleClick}
              >
                Sign In with Google
              </Button>
              {innerLoginError && (
                <div className="bg-dark p-3 mt-3">
                  <p className="text-white mb-0">{innerLoginError}</p>
                </div>
              )}
            </form>
          </section>
        </div>
      )}
    </main>
  );
}

export default Login;
