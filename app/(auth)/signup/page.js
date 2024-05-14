import SignupForm from "@/components/auth/signup-form";
import FbAndGoogle from "@/components/auth/google-facebook";
import Link from "next/link";

const SignupPage = () => {
  return (
    <main className="">
      <section className="h-screen grid place-items-center">
        <div className="max-w-[450px] w-full mx-auto p-6 border border-gray-700/20 rounded-md">
          <h4 className="font-bold text-2xl">Sign up</h4>
          <SignupForm />

          <div className="text-center text-xs text-gray-500">
            <Link href="/signin" className="underline underline-offset-2">
              Sign in
            </Link>{" "}
            or Signup with
          </div>
          <FbAndGoogle />
        </div>
      </section>
    </main>
  );
};

export default SignupPage;
