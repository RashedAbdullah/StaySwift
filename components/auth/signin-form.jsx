"use client";

import { handleSignin } from "@/actions/actions";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SignInForm = () => {
  const [error, setError] = useState();
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);
      const response = await handleSignin(formData);
      if (!!response.error) {
        setError(response.error.message);
      } else {
        router.push("/");
      }
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <>
      {error && <div className="text-center text-sm text-red-500">{error}</div>}
      <form className="login-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" id="email" />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>

        <button type="submit" className="btn-primary w-full mt-4">
          Sign in
        </button>
      </form>
    </>
  );
};

export default SignInForm;
