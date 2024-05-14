"use client";

import Image from "next/image";
import fb from "@/public/fb.png";
import google from "@/public/google.png";
import { signIn } from "next-auth/react";

const FbAndGoogle = () => {
  const handleAuth = (event) => {
    signIn(event, { callbackUrl: "http://localhost:3000" });
  };
  return (
    <div className="flex gap-4">
      <button
        onClick={() => handleAuth("facebook")}
        className=" w-full mt-4 py-2 border-gray-600/30 border rounded-md flex items-center gap-2 justify-center"
      >
        <Image src={fb} alt="" />
        <span>Facebook</span>
      </button>
      <button
        onClick={() => handleAuth("google")}
        className=" w-full mt-4 py-2 border-gray-600/30 border rounded-md flex items-center gap-2 justify-center"
      >
        <Image src={google} alt="" />
        <span>Google</span>
      </button>
    </div>
  );
};

export default FbAndGoogle;
