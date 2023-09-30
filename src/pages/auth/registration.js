/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import Lottie from "lottie-react";
import reader from "../../Assets/login/reg.json";
import RootLayout from "@/components/layout/RootLayout";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import auth from "@/firebase/firebase.auth";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import Link from "next/link";

const registration = () => {
  const [createUserWithEmailAndPassword, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const { register, handleSubmit } = useForm();

  const handleRegister = (data) => {
    createUserWithEmailAndPassword(data.email, data.password);
  };

  //   const [user] = useAuthState(auth);

  //   console.log("firebase... reg", user);
  //   // console.log(user);

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center lg:w-[1170px] lg:mx-auto mx-10 ">
      <div className="flex flex-col w-full p-6 rounded-md sm:p-10 justify-center items-center  bg-gray-50 shadow-sm ">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Registration</h1>
          <p className="text-sm ">Registration to get your account</p>
        </div>
        <form
          onSubmit={handleSubmit(handleRegister)}
          novalidate=""
          action=""
          className="space-y-12 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4 w-[400px] ">
            <div>
              <label for="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                name="email"
                id="email"
                placeholder="masud@gmail.com"
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label for="password" className="text-sm">
                  Password
                </label>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs hover:underline"
                >
                  Forgot password?
                </a>
              </div>
              <input
                {...register("password", { required: true })}
                type="password"
                name="password"
                id="password"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button
                type="submit"
                className="w-full px-8 py-3 font-semibold rounded-md dark:bg-orange-300 dark:text-gray-900"
              >
                Registration
              </button>

              <button
                onClick={() =>
                  signIn("google", {
                    callbackUrl: "http://localhost:3000",
                  })
                }
                aria-label="Login with Google"
                type="button"
                className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400 mt-5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                </svg>
                <p>Registration with Google</p>
              </button>
            </div>
            <p className="px-6 text-sm text-center ">
              Already have an account?
              <Link
                href="/auth/login"
                rel="noopener noreferrer"
                className="hover:underline ml-3 text-blue-600"
              >
                Login
              </Link>
              .
            </p>
          </div>
        </form>
      </div>
      <div className="w-full">
        <Lottie animationData={reader} loop={true} />
      </div>
    </div>
  );
};

export default registration;

registration.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
