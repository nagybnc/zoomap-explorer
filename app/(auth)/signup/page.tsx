"use client";
import Link from "next/link";
import React from "react";
import styles from "../Auth.module.css";

function SignUp() {
  return (
    <form className="space-y-6">
      <h5 className="text-xl font-medium text-gray-900 ">
        Sign up to our platform
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

      <div>
        <label htmlFor="cpassword" className={styles.label}>
          Confirm Your password
        </label>
        <input
          type="password"
          id="cpassword"
          placeholder="••••••••"
          className={styles.input}
          required
        />
      </div>

      <button
        type="submit"
        className={`bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 ${styles.submit}`}
      >
        Sign Up
      </button>
      <div className="text-sm font-medium text-gray-500">
        Already have an account?{" "}
        <Link className="text-blue-700 hover:underline" href="/signin">
          Sign in
        </Link>
      </div>
    </form>
  );
}

export default SignUp;
