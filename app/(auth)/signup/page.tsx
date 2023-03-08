"use client";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { signUpValidate } from "../../../lib/auth/validate";
import styles from "../Auth.module.css";

function SignUp() {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      cpassword: "",
    },
    validate: signUpValidate,
    onSubmit: async (values, actions) => {
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      };

      const signupRes = await fetch(
        `${window.location.origin}/api/auth/signup`,
        options
      );

      const signupResJSON = await signupRes.json();
      if (signupResJSON.error) {
        actions.setErrors(signupResJSON.error);
      } else {
        router.push("/signin");
      }
    },
  });
  return (
    <form className="space-y-6" onSubmit={formik.handleSubmit}>
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
          {...formik.getFieldProps("cpassword")}
        />
        {formik.errors.cpassword && formik.touched.cpassword ? (
          <span className="text-red-500">{formik.errors.cpassword}</span>
        ) : null}
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
