import React from "react";
import NavbarBlack from "../Shared/Navbar/NavbarBlack";
import { Link } from "react-router-dom";
import { FaFacebook, FaGoogle } from "react-icons/fa6";

const Login = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <NavbarBlack></NavbarBlack>
      <div className="h-full border mt-32 py-10 px-28 rounded-lg">
        <form className="card-body">
          <h2 className="font-bold text-2xl">Login</h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a
                href="#"
                className="label-text-alt link link-hover text-yellow-400 font-medium text-base"
              >
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <Link className="btn btn-warning">Login</Link>
          </div>
        </form>

        <h5 className="text-base font-medium text-center">
          Don’t have an account?{" "}
          <Link to="/register" className="text-yellow-400">
            Create an account
          </Link>
        </h5>
      </div>
      <div>
        <div className="flex items-center justify-center w-full my-7">
          <div className="w-1/3 h-px bg-gray-300"></div>
          <span className="px-4 text-xl font-semibold">Or</span>
          <div className="w-1/3 h-px bg-gray-300"></div>
        </div>

        <div className="flex justify-center gap-4 border border-gray-300 w-1/3 mx-auto p-4 mb-4 rounded-full">
          <FaFacebook className="text-xl" />
          <p className="font-medium text-base">Continue with Facebook</p>
        </div>
        <div className="flex justify-center gap-4 border border-gray-300 w-1/3 mx-auto p-4 rounded-full">
          <FaGoogle className="text-xl" />
          <p className="font-medium text-base">Continue with Google</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
