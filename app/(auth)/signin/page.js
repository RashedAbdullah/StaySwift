import Image from "next/image";
import fb from "@/public/fb.png";
import google from "@/public/google.png";
import SignInForm from "@/components/auth/signin-form";
import FbAndGoogle from "@/components/auth/google-facebook";
import Link from "next/link";
const SignInPage = () => {
  return (
    <main className="">
      <section className="h-screen grid place-items-center">
        <div className="max-w-[450px] w-full mx-auto p-6 border border-gray-700/20 rounded-md">
          <h4 className="font-bold text-2xl">Sign in</h4>
          <SignInForm />

          <div className="text-center text-xs text-gray-500">
           <Link href="/signup" className="underline underline-offset-2">Register</Link> or Signup with
          </div>
          <FbAndGoogle />
        </div>
      </section>
    </main>
  );
};

export default SignInPage;
