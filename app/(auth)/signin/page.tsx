"use client";
import Link from "next/link";
import React from "react";
import { SignInWithGithub } from "../actions";
import styles from "../Auth.module.css";
import { useFormik } from "formik";
import { loginValidate } from "../../../lib/auth/validate";
import { signIn } from "next-auth/react";

function SignIn() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: loginValidate,
    onSubmit: async (values) => {
      return await signIn("credentials", {
        email: values.email,
        password: values.password,
        callbackUrl: "/map",
      });
    },
  });

  return (
    <>
      <form className="space-y-6" onSubmit={formik.handleSubmit}>
        <h5 className="text-xl font-medium text-gray-900">
          Sign in to our platform
        </h5>
        <div>
          <label htmlFor="email" className={styles.label}>
            Your email
          </label>
          <input
            type="email"
            id="email"
            className={styles.input}
            placeholder="elon@musk.com"
            required
            {...formik.getFieldProps("email")}
          />
          {formik.errors.email && formik.touched.email ? (
            <span className="text-red-500">{formik.errors.email}</span>
          ) : null}
        </div>
        <div>
          <label htmlFor="password" className={styles.label}>
            Your password
          </label>
          <input
            type="password"
            id="password"
            placeholder="••••••••"
            className={styles.input}
            required
            {...formik.getFieldProps("password")}
          />
          {formik.errors.password && formik.touched.password ? (
            <span className="text-red-500">{formik.errors.password}</span>
          ) : null}
        </div>

        <button
          type="submit"
          className={`bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 ${styles.submit}`}
        >
          Login to your account
        </button>
        <div className="text-sm font-medium text-gray-500">
          Not registered?{" "}
          <Link className="text-blue-700 hover:underline" href="/signup">
            Create account
          </Link>
        </div>
      </form>
      <div className="inline-flex items-center justify-center w-full">
        <hr className="w-full h-px my-8 bg-gray-200 border-0" />
        <span className="absolute px-3 text-gray-500 -translate-x-1/2 bg-white left-1/2">
          OR
        </span>
      </div>
      <SignInWithGithub />
    </>
  );
}

export default SignIn;
