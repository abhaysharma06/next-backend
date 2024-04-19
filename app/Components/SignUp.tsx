"use client";
import { ChangeEventHandler, useState } from "react";
import LabelledInput from "./LabelledInput";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <a
          href="#"
          className="block max-w-sm p-6 bg-white border-gray-200 rounded-lg shadow hover:bg-gray-100"
        >
          <div>
            <div className="px-10">
              <div className="text-3xl font-extrabold">SignUp</div>
              <div className="pt-6 flex flex-col gap-4">
                <LabelledInput
                  label="UserName"
                  placeholder="jhon@gmail.com"
                  onChange={(e: any) => {
                    setUsername(e.target.value);
                  }}
                />
                <LabelledInput
                  label="Password"
                  placeholder="**********"
                  onChange={(e: any) => {
                    setPassword(e.target.value);
                  }}
                />
                <button
                  type="submit"
                  className="mt-8 w-full bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium text-sm px-5 py-2.5 me-2 mb-2 text-white"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default SignUp;
