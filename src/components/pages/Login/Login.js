import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Button } from "react-bootstrap";
import ROUTES from "../../../utils/routes";

function Login({
  currentUserState: { isAuthenticated, loginError, isLoggingIn } = {},
  login,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (email !== "" && password !== "") {
      login({ email, password });
    }
  }

  if (isAuthenticated) {
    return <Redirect to={ROUTES.DASHBOARD} />;
  }

  return (
    <main className="container d-flex flex-column flex-shrink-0 flex-grow-1">
      <div className="row justify-content-sm-center align-items-sm-center flex-grow-1">
        <section className="Form col-md-8 col-xl-6 mx-sm-auto border rounded p-sm-5">
          <header>
            <h1 className="h2 pt-5 pt-sm-2 pb-4">Iniciar sesión</h1>
          </header>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Tu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                id="password"
                placeholder="Tu contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button
              htmlType="submit"
              additionalClasses="mt-4 btn-block"
              disabled={isLoggingIn}
            >
              Iniciar sesión
            </Button>
            {loginError && (
              <div className="bg-dark p-3 mt-3">
                <p className="text-white mb-0">{loginError}</p>
              </div>
            )}
          </form>
        </section>
      </div>
    </main>
  );
}

export default Login;
