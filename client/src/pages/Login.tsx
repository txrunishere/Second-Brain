import React, { useRef } from "react";
import Button from "../components/Button";
import axios from "axios";

const BACKEND_URL = "http://localhost:8080/api/v1";

export default function Login() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        BACKEND_URL + "/user/login",
        {
          username: usernameRef.current?.value || "",
          password: passwordRef.current?.value || "",
        },
        {
          withCredentials: true,
        }
      );
      localStorage.setItem("token", res.data?.token)
      console.log(res.data);
    } catch (error) {
      console.log("E", error);
    }
  };

  return (
    <div className="flex mt-[5rem] justify-center">
      <form className="flex flex-col" onSubmit={(e) => handleSubmit(e)}>
        <input
          ref={usernameRef}
          className="outline-0 rounded-xl border-[2px] border-gray-50 mt-4 font-medium px-2 py-2"
          type="text"
          placeholder="Enter username"
          name="username"
          required
        />
        <input
          ref={passwordRef}
          className="outline-0 rounded-xl border-[2px] border-gray-50 mt-4 font-medium px-2 py-2"
          type="password"
          placeholder="Enter password"
          name="password"
          required
        />
        <Button type="submit" className="mt-3" varient="primary">
          Login
        </Button>
      </form>
    </div>
  );
}
