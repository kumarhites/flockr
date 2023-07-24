import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const Login = () => {
  const { loginHandler } = useAuth();
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  //test data
  const guestUserDetails = {
    username: "tanaypratap",
    password: "tanaypratap",
  };

  const handleInputData = (e) => {
    e.preventDefault();
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };
  const loginSubmitHandler = (e) => {
    e.preventDefault();
    loginHandler(loginData);
  };
  return (
    <div>
      <div className="mx-auto flex flex-col justify-center bg-transparent px-14 py-10 mobile:px-8 tablet:px-8 laptop:max-w-lg laptop:py-14">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
          <h1 className="font-poppins mt-10 text-center text-5xl font-extrabold leading-10 tracking-tight text-slate-100 ">
            Flockr.
          </h1>
          <h2 className="mt-10 text-center text-xl font-bold tracking-tight text-slate-200">
            Welcome back
          </h2>
        </div>

        <div className="sm:mx-auto sm:w-full sm:max-w-sm mt-10">
          <form className="space-y-6" onSubmit={loginSubmitHandler}>
            <div>
              <label className="block">
                <span className="block text-sm font-medium text-slate-100 after:ml-0.5 after:text-red-500 after:content-['*']">
                  Username
                </span>
                <input
                  type="text"
                  name="username"
                  className="sm:text-sm mt-1 block w-full rounded-md border border-slate-300 bg-transparent/[0.2] px-3 py-2 text-slate-100 placeholder-slate-400 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                  placeholder="username"
                  value={loginData.username}
                  onChange={handleInputData}
                />
              </label>
            </div>

            <div>
              <label className="block">
                <span className="block text-sm font-medium text-slate-100 after:ml-0.5 after:text-red-500 after:content-['*']">
                  Password
                </span>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="sm:text-sm mt-1 block w-full rounded-md border border-slate-300 bg-transparent/[0.2] px-3 py-2 text-slate-100 placeholder-slate-400 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                  value={loginData.password}
                  onChange={handleInputData}
                />
              </label>
            </div>
            <div className="flex flex-col gap-3">
              <button
                type="submit"
                className="focus-visible:outline-black/[0.5]; flex w-full justify-center rounded-md bg-teal-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Sign in
              </button>
              <button
                type="submit"
                className="focus-visible:outline-black/[0.5]; flex w-full justify-center rounded-md bg-teal-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                onClick={(e) => {
                  e.preventDefault();
                  setLoginData(guestUserDetails);
                  loginHandler(guestUserDetails);
                }}
              >
                Sign in with Test Credentials
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-200">
            Not a member?{" "}
            <NavLink
              to="/signup"
              className="font-semibold leading-6 text-teal-500 hover:text-teal-500"
            >
              Signup
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
