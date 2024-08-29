import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Button from "elements/Button";

const LoginPage = () => {
  const { login, errorMessage } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    login(username, password);
  };

  return (
    <section className="h-100" style={{ marginBottom: 0 }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-6 col-lg-5">
            <div
              className="card"
              style={{
                borderRadius: "1rem",
                border: "1px solid gray",
              }}
            >
              <div className="card-body p-4 p-lg-5 text-black">
                {errorMessage && (
                  <div className="alert alert-info">{errorMessage}</div>
                )}
                <form onSubmit={handleLogin}>
                  <h5
                    className="fw-normal mb-3 pb-3"
                    style={{ letterSpacing: "1px" }}
                  >
                    Sign into your account
                  </h5>

                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      id="username"
                      name="username"
                      className="form-control form-control-lg"
                    />
                    <label className="form-label" htmlFor="username">
                      Username
                    </label>
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="form-control form-control-lg"
                    />
                    <label className="form-label" htmlFor="password">
                      Password
                    </label>
                  </div>

                  <div className="pt-1 mb-4">
                    <Button isBlock isPrimary hasShadow isLarge type="submit">
                      Login
                    </Button>
                  </div>

                  <p className="mb-2 pb-lg-2">
                    Don't have an account?{" "}
                    <a href="/#/register" style={{ color: "#393f81" }}>
                      Register here
                    </a>
                  </p>

                  <div className="pb-lg-2" style={{ color: "red"}}>
                    <span>Demo: </span>
                    <p>username = demo, password = demo</p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
