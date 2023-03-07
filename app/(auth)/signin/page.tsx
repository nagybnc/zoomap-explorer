"use client";
import Link from "next/link";
import React from "react";
import { SignInWithGithub } from "../actions";
import styles from "../Auth.module.css";

function SignIn() {
  return (
    <>
      <form className="space-y-6">
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
          />
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
          />
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
      <div className="inline-flex w-full items-center justify-center">
        <hr className="my-8 h-px w-full border-0 bg-gray-200" />
        <span className="absolute left-1/2 -translate-x-1/2 bg-white px-3 text-gray-500">
          OR
        </span>
      </div>
      <SignInWithGithub />
    </>
  );
}

export default SignIn;
