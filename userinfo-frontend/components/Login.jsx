import React, { useState } from "react";
import { Link } from "react-router-dom";

const initialLogin = {
  email: "",
  password: "",
};

const Login = () => {
  const [loginFields, setLoginFields] = useState(() => initialLogin);

  return (
    <div>
      <div className="container col-xl-10 col-xxl-8 px-4 py-5">
        <div className="row align-items-center g-lg-5 py-5">
          <div className="col-lg-7 text-center text-lg-start">
            <h1 className="display-4 fw-bold lh-1 mb-3">
              Vertically centered hero sign-up form
            </h1>
            <p className="col-lg-10 fs-4">
              Below is an example form built entirely with Bootstrap’s form
              controls.
            </p>
          </div>
          <div className="col-md-10 mx-auto col-lg-5">
            <form className="p-4 p-md-5 border rounded-3 bg-light">
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  fdprocessedid="whua2"
                  value={loginFields.email}
                  onChange={(e) =>
                    setLoginFields({
                      ...loginFields,
                      email: e.target.value,
                    })
                  }
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  fdprocessedid="2a3na4"
                  value={loginFields.password}
                  onChange={(e) =>
                    setLoginFields({
                      ...loginFields,
                      password: e.target.value,
                    })
                  }
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>

              <button
                className="w-100 btn btn-lg btn-primary"
                type="submit"
                fdprocessedid="u99c95"
              >
                Login
              </button>
              <hr className="my-4" />
              <small>
                <span className="text-muted">Don't have an account, </span>
                <Link to="/signup">Register here</Link>
              </small>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
