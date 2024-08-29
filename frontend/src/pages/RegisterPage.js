import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Button from "elements/Button";

const RegisterPage = () => {
  const { register, errorMessage } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    register(username, email, password);
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
                <form onSubmit={handleRegister}>
                  <h5
                    className="fw-normal mb-3 pb-3"
                    style={{ letterSpacing: "1px" }}
                  >
                    Sign up
                  </h5>

                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      id="username"
                      name="username"
                      className="form-control form-control-lg"
                      required
                    />
                    <label className="form-label" htmlFor="username">
                      Username
                    </label>
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control form-control-lg"
                      required
                    />
                    <label className="form-label" htmlFor="email">
                      Email address
                    </label>
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="form-control form-control-lg"
                      required
                    />
                    <label className="form-label" htmlFor="password">
                      Password
                    </label>
                  </div>

                  <div className="pt-1 mb-4">
                    <Button isBlock isPrimary hasShadow isLarge type="submit">
                      Register
                    </Button>
                  </div>

                  <p>
                    Already have an account?{" "}
                    <a href="/#/login" style={{ color: "#393f81" }}>
                      Login here
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
