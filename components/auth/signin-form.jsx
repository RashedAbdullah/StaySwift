import React from "react";

const SignInForm = () => {
  return (
    <form className="login-form">
      <div>
        <label for="email">Email Address</label>
        <input type="email" name="email" id="email" />
      </div>

      <div>
        <label for="password">Password</label>
        <input type="password" name="password" id="password" />
      </div>

      <button type="submit" className="btn-primary w-full mt-4">
        Sign in
      </button>
    </form>
  );
};

export default SignInForm;
