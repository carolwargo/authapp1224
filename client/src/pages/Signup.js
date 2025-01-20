import React from "react";
import Signup from "../components/Signup";

const SignupPage = () => {  

  return (
    <div className="w3-black">
    <Signup/>
   </div>

  );
};

export default SignupPage;


/**
 *     <div className="container" style={{ padding: "20px" }}>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h1 className="text-center mb-4">Signup</h1>

            {error && <p className="text-danger text-center">{error}</p>}
            {successMessage && (
              <p className="text-success text-center">
                {successMessage} <Link to="/login">Login here.</Link>
              </p>
            )}

            <form onSubmit={handleSubmit}>
              <MDBInput
                className="mb-3"
                type="text"
                value={username}
                placeholder="John Doe"
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <MDBInput
                className="mb-3"
                type="email"
                value={email}
                placeholder="johndoe@email.com"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <MDBInput
                className="mb-3"
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <input
                type="checkbox"
                value={terms}
                id="terms"
                name="terms"
                required
              />
              <MDBBtn type="submit" className="w-100">
                Signup
              </MDBBtn>

              <div className="text-center mt-3">
                <p>
                  Already have an account? <Link to="/login">Login here</Link>.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
 */