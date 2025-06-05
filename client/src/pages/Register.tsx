import axios from "axios";
import Button from "../components/Button";
import { useRef } from "react";

const BACKEND_URL = "http://localhost:8080/api/v1";

export default function Register() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    try {
      console.log(1)
      const res = await axios.post(
        BACKEND_URL + "/user/register",
        {
          username: usernameRef.current?.value || "",
          password: passwordRef.current?.value || "",
        },
        {
          withCredentials: true,
        }
      );
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
          Register
        </Button>
      </form>
    </div>
  );
}
