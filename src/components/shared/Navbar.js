import React from "react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { useSelector } from "react-redux";
import Image from "next/image";

const Navbar = () => {
  const { data: seassion } = useSession();

  const { products } = useSelector((state) => state.products);
  

  return (
    <>


      {/* 2nd */}
      <div
        className="max-w-[1920px] w-full bg-[#ffffff] px-2 md:px-6"

      >
        <header className="bg-[#ffffff] w-full">
          <div className="mx-auto  px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex-1 md:flex md:items-center md:gap-12">
                <Link className="block md:flex gap-2 text-[#ce24b4] items-center" href="/">
                  <span className="sr-only">Home</span>
                  <Image
                    src="https://i.ibb.co/W5sRzg6/a6c67360ed7472ee57ea422f578774a0-removebg-preview.png"
                    alt="logo"
                    width={50}
                    height={50}
                  ></Image>
                  <p className="hidden md:block font-semibold text-2xl font-serif">
                    PC BUILDER
                  </p>
                </Link>
              </div>

              <div className="md:flex md:items-center md:gap-12 z-50">
                <div className="navbar-center hidden lg:flex">
                  <ul className="menu menu-horizontal px-1">
                    <li tabIndex={0}>
                      <details>
                        <summary>Categories</summary>
                        <ul className="p-2 ">
                          {products?.map((category) => (
                            <li key={Math.random()}>
                              <Link href={`/category/${category.category}`}>
                                {category.category}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </details>
                    </li>

                    {!seassion && (
                      <li>
                        <Link href={"/auth/login"} className="rounded-md bg-[#ce24b4] px-5 py-2.5 text-sm font-medium text-white shadow ">Login</Link>
                      </li>
                    )}
                    {!seassion && (
                      <li className="ml-5">
                        <Link href={"/auth/registration"} className="rounded-md bg-[#fae5f7] px-5 py-2.5 text-sm font-medium text-[#ce24b4] border border-[#ce24b4] "
                        >Registration</Link>
                      </li>
                    )}
                  </ul>
                </div>
                {seassion && (
                  <div className="dropdown dropdown-bottom dropdown-end ml-5 lg:block hidden">
                    <label tabIndex={0} className="btn">
                      Profile
                    </label>
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                    >
                      <li>
                        <a>{seassion && <h1>{seassion?.user.name}</h1>}</a>
                      </li>
                      <li>
                        <a>
                          {" "}
                          {seassion && (
                            <button onClick={() => signOut()} type="primary" danger>
                              Logout
                            </button>
                          )}
                        </a>
                      </li>
                    </ul>
                  </div>
                )}

                <Link
                  href={"/pcbuilder"}
                  className="px-8 py-3 bg-blue-500 text-white rounded-md shadow-md lg:block hidden"
                >
                  PC Builder
                </Link>

              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Navbar;
