import React from "react";
import "./SignUP.css";
// import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignUP = () => {
  return (
    <div>
      <section>
        <div className="signUp-page">
          <div className="flex justify-evenly align-center mt-10 mb-10 w-10/12 mx-auto ">
            <div className=" bg-info w-full ">
              <h1 className="text-5xl text-white w-96 pt-8 pb-6 mx-auto">
                You order and we deliver
              </h1>

              <img
                src="https://i.ibb.co/qMDcmvY/signup.png"
                alt=""
                className="w-96 mx-auto  mt-5 mb-5"
              />
            </div>

            <div className="input-form w-full bg-white ">
              <form action="" className="sign-up-form w-8/12 mx-auto pt-20">
                <div>
                  <h1 className="text-4xl text-neutral font-semibold mb-5">
                    Create Account
                  </h1>
                  <div>
                    <button className="btn capitalize w-60 h-12 mr-5 ">
                      {" "}
                      <FcGoogle className="w-5 h-5 me-2" /> Sign up with Google
                    </button>
                    <button className="btn capitalize w-60 h-12 ">
                      {" "}
                      <FaFacebook className="w-5 h-5 me-2 text-info" /> Sign up
                      with Facebook
                    </button>
                  </div>
                </div>

                <div className=" input-field">
                  <div className="mt-10 mb-10">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="input input-bordered input-md w-full max-w-xs"
                    />
                  </div>
                  <div className="mt-10 mb-10">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="input input-bordered input-md w-full max-w-xs"
                    />
                  </div>
                  <div className="mt-10 mb-10">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="input input-bordered input-md w-full max-w-xs"
                    />
                  </div>
                </div>

                <div>
                  <button class="btn btn-wide ">Create Account</button>
                </div>
                <div className="flex justify-between align-center w-96 mt-10 mb-10 ">
                  <p className="text-success font-semibold">
                    Already Have An Account?{" "}
                  </p>
                  <Link to="/" className="text-error">
                    Login{" "}
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUP;
