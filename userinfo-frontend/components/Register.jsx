import React, { useState } from "react";
import { Link } from "react-router-dom";

const initialRegister = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

const Register = () => {
  const [registerFields, setRegisterFields] = useState(() => initialRegister);

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
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="John"
                  fdprocessedid="whua2"
                  value={registerFields.firstName}
                  onChange={(e) =>
                    setRegisterFields({
                      ...registerFields,
                      firstName: e.target.value,
                    })
                  }
                />
                <label htmlFor="floatingInput">First Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Doe"
                  fdprocessedid="whua2"
                  value={registerFields.lastName}
                  onChange={(e) =>
                    setRegisterFields({
                      ...registerFields,
                      lastName: e.target.value,
                    })
                  }
                />
                <label htmlFor="floatingInput">Last Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  fdprocessedid="whua2"
                  value={registerFields.email}
                  onChange={(e) =>
                    setRegisterFields({
                      ...registerFields,
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
                  value={registerFields.password}
                  onChange={(e) =>
                    setRegisterFields({
                      ...registerFields,
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
                Sign up
              </button>
              <hr className="my-4" />
              <small>
                <span className="text-muted">Already have an account, </span>
                <Link to={"/login"}>Login here</Link>
              </small>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
