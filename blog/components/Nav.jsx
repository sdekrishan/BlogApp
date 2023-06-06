"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  const [providers, setProviders] = useState(null);
  const isUserLoggedIn = true;
  useEffect(() => {
    const setProviders = async() => {
        const response = await getProviders();
        setProviders(response)
    }
    setProviders()
  }, []);
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src={"/assets/images/logo.svg"}
          alt="blogmania logo"
          width={45}
          height={45}
          className="object-contain"
        />
        <p className="logo_text">Blogmania</p>
      </Link>

      {/* Mobile Navigation */}

      <div className="sm:flex hidden">
        {isUserLoggedIn ? (
          <div className="flex gap-3 md:gap-5 ">
            <Link href={"/create-blog"} className="black_btn">
              Create Post
            </Link>

            <button type="button" onClick={signOut} className="outline_btn">
              Sign Out
            </button>
            <Link href={"/profile"}>
              <Image
                src="/assets/images/logo.svg"
                width={37}
                height={37}
                alt="profile img"
                className="rounded-full"
              />
            </Link>
          </div>
        ) : (
          <>

          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;