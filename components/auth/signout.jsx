"use client";

import { signOut } from "next-auth/react";
const SignoutComponent = () => {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "http://localhost:3000/signin" })}
      className="login"
    >
      Sign out
    </button>
  );
};

export default SignoutComponent;
