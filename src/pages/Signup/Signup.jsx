import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useAuth } from "../../contexts/AuthContext";
import { defaultAvatar } from "../../utils/avatarImages";

const Signup = () => {
  const { signupHandler } = useAuth();
  const [userSignupDetails, setUserSignupDetails] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    confirmPassword: "",
    avatar: defaultAvatar,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showCnfPassword, setShowCnfPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleCnfPasswordVisibility = () => {
    setShowCnfPassword(!showCnfPassword);
  };

  const handleInput = (e) => {
    // setError("");
    setUserSignupDetails({
      ...userSignupDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    signupHandler(userSignupDetails);
  };
  return (
    <>
      {" "}
      <div className="lg:px-8 mx-auto flex flex-col justify-center px-14 py-20 laptop:max-w-lg">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h1 className="font-primary mt-10 text-center text-5xl  font-extrabold leading-9 tracking-tight text-slate-100">
            Flockr.
          </h1>
          <h2 className="mt-10 text-center text-xl font-bold tracking-tight text-slate-100">
            Sign up for a new account
          </h2>
        </div>

        <div className="sm:mx-auto sm:w-full sm:max-w-sm mt-10">
          {/* form begins */}
          <form className="space-y-6">
            {/* username starts */}
            <div className="flex-1">
              <label
                htmlFor="fullname"
                className="block text-sm font-bold  leading-6 text-slate-100"
              >
                Name <span className="text-red-500">*</span>
              </label>
              <div className="mt-2 flex gap-3">
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  placeholder="FirstName"
                  className="sm:text-sm mt-1 block w-full rounded-md border border-slate-300 bg-transparent/[0.2] px-3 py-2 text-slate-100 placeholder-slate-400 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                  value={userSignupDetails.firstName}
                  onChange={(e) => {
                    handleInput(e);
                  }}
                />
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  placeholder="LastName"
                  className="sm:text-sm mt-1 block w-full rounded-md border border-slate-300 bg-transparent/[0.2] px-3 py-2 text-slate-100 placeholder-slate-400 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                  value={userSignupDetails.lastName}
                  onChange={(e) => {
                    handleInput(e);
                  }}
                />
              </div>
            </div>
            <div className="flex-1">
              <label
                htmlFor="username"
                className="block text-sm font-bold  leading-6 text-slate-100"
              >
                Username <span className="text-red-500">*</span>
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  placeholder="Username"
                  className="sm:text-sm mt-1 block w-full rounded-md border border-slate-300 bg-transparent/[0.2] px-3 py-2 text-slate-100 placeholder-slate-400 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                  value={userSignupDetails.username}
                  onChange={(e) => {
                    handleInput(e);
                  }}
                />
              </div>
            </div>
            {/* username ends */}
            {/* password starts */}
            <div>
              <div className="flex flex-wrap items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-bold  leading-6 text-slate-100"
                >
                  Password <span className="text-red-500">*</span>
                </label>
              </div>
              <div className="relative mt-2">
                <span className="absolute inset-y-0 right-0 flex items-center pr-2">
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="focus:shadow-outline cursor-pointer p-1 focus:outline-none"
                  >
                    {showPassword ? (
                      <FaRegEyeSlash size={20} color="white" />
                    ) : (
                      <FaRegEye size={20} color="white" />
                    )}
                  </button>
                </span>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="Password (Min. 6 characters) "
                  className="sm:text-sm mt-1 block w-full rounded-md border border-slate-300 bg-transparent/[0.2] px-3 py-2 text-slate-100 placeholder-slate-400 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                  value={userSignupDetails.password}
                  onChange={(e) => {
                    handleInput(e);
                  }}
                />
              </div>
            </div>
            {/* password ends */}
            {/* confirm password starts */}
            <div>
              <div className="flex flex-wrap items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-bold  leading-6 text-slate-100"
                >
                  Confirm Password <span className="text-red-500">*</span>
                </label>
              </div>
              <div className="relative mt-2">
                <span className="absolute inset-y-0 right-0 flex items-center pr-2">
                  <button
                    type="button"
                    className="focus:shadow-outline cursor-pointer p-1 focus:outline-none"
                    onClick={toggleCnfPasswordVisibility}
                  >
                    {showCnfPassword ? (
                      <FaRegEyeSlash size={20} color="white" />
                    ) : (
                      <FaRegEye size={20} color="white" />
                    )}
                  </button>
                </span>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showCnfPassword ? "text" : "password"}
                  required
                  placeholder="Confirm Password"
                  className="sm:text-sm mt-1 block w-full rounded-md border border-slate-300 bg-transparent/[0.2] px-3 py-2 text-slate-100 placeholder-slate-400 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                  value={userSignupDetails.confirmPassword}
                  onChange={(e) => {
                    handleInput(e);
                  }}
                />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <button
                type="submit"
                onClick={handleSignupSubmit}
                className="flex w-full justify-center rounded-md bg-teal-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black/[0.5]"
              >
                Register
              </button>
            </div>
          </form>
          {/* form ends */}
          <p className="mt-10 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <NavLink
              to="/login"
              className="font-semibold leading-6 text-teal-500 hover:text-teal-500"
            >
              Login
            </NavLink>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
