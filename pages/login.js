import Link from "next/link";
import React from "react";
import Layout from "../components/Layout";
import { useForm } from "react-hook-form";

const LoginScreen = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const SubmitHandler = (email, password) => {
    console.log(email, password);
  };
  return (
    <Layout title="Login">
      <form
        action=""
        className="max-w-screen-md mx-auto"
        onSubmit={handleSubmit(SubmitHandler)}
      >
        <h1 className="mb-4 text-xs">Login</h1>
        <div className="mb-4">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            {...register("email", {
              required: "Please enter a email",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                message: "Please enter a valid email",
              },
            })}
            className="w-full"
            id="email"
            autoFocus
          />
          {errors.email && (
            <div className="text-red-500">{errors.email.message}</div>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            {...register("password", {
              required: "Enter your password",
              minLength: { value: 6, message: "password is more than 5 chars" },
            })}
            className="w-full"
            id="password"
            autoFocus
          />
          {errors.password && (
            <div className="text-red-500">{errors.password.message}</div>
          )}
        </div>

        <div>
          <button className="primary-button">Login</button>
        </div>
        <div className="mb-4">Don&apos;t have an account? &nbsp;</div>
        <Link href="register">Register</Link>
      </form>
    </Layout>
  );
};

export default LoginScreen;
