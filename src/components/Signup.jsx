import React from "react";

import { Link } from "react-router-dom";
export default function Signup() {
  return (
    <>
      <p className={"text-[#79cce6] text-2xl font-bold "}>
        Sign Up for an account
      </p>
      <div className="input group">
        <div className="border-2 h-7 border-[#79cce6] rounded-lg mt-10">
          <span className="text-[#79cce6]">
            <i className="fa fa-user" aria-hidden="true"></i>
          </span>

          <input
            type="text"
            className="text-[#79cce6] ml-7"
            placeholder={"Full Name"}
          />
        </div>
      </div>
      <div className="input-group">
        <div className="border-2 mt-3 h-7 border-[#79cce6] rounded-lg ">
          <span className="input-group-text text-[#79cce6]">
            <i className="fa-regular fa-at"></i>
          </span>
          <input
            type="text"
            className="text-[#79cce6] ml-7"
            placeholder={"Email Address"}
          />
        </div>
      </div>

      <div className="mt-3 h-7 border-2 border-[#79cce6] rounded-lg">
        <div className="input-group ">
          <span className="input-group-text text-[#79cce6]">
            <i className="fa-solid fa-lock"></i>
          </span>
          <input
            type="password"
            className="text-[#79cce6] ml-7"
            placeholder={"Password"}
          />
        </div>
      </div>
      <div className="mt-3 h-7 border-2 border-[#79cce6] rounded-lg">
        <div className="input-group ">
          <span className="input-group-text text-[#79cce6]">
            <i className="fa-solid fa-lock"></i>
          </span>
          <input
            type="Repeat password"
            className="text-[#79cce6] ml-7"
            placeholder={"Repeat Password"}
          />
        </div>
      </div>
      <div className="flex flex-row mt-3">
        <label htmlFor="remember-me">
          <input type="checkbox" className="ring-2 ring-[#79cce6]" /> I agree
          with
        </label>
        <h1 className="ml-2 text-[#79cce6]">
          <a href="/"> Terms</a>
        </h1>
        <h1 className={"ml-2"}>and</h1>
        <h1 className="ml-2 text-[#79cce6]">
          <a href="/"> Policy</a>
        </h1>
      </div>

      <button
        className={
          "bg-[#79cce6] font-bold text-white w-full h-7 mt-4 rounded-lg"
        }
      >
        SIGN UP
      </button>

      <button
        className={"mt-3 w-full h-7 border-2 border-[#79cce6] rounded-lg"}
      >
        <i className="fa-brands fa-google custom-google-icon"></i>
        <span className="text-[blackcd] ml-2">Sign Up With google</span>
      </button>

      <div className="flex flex-row">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <p className={"mt-3"}>Already have an account?</p>

        <Link to="/signin" className="mt-3 ml-3 text-[#79cce6]">
          Sign In
        </Link>
      </div>
    </>
  );
}
