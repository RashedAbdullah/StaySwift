"use server";

import { signIn } from "@/auth";
import { dbConnection } from "@/db-connection/mongo";

const handleSignin = async (formData) => {
  try {
    await dbConnection();
    const response = signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });
    return response;
  } catch (err) {
    throw new Error(err);
  }
};

export { handleSignin };
