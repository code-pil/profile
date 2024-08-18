import Link from "next/link";
import CartLink from "./CartLink";

export function Header() {
  return (
    <nav className="flex items-center justify-around pt-5 border-b border-b-gray-700 pb-4 fixed top-0 w-[100vw] z-10 bg-white bg-opacity-80 backdrop-blur-xl">
      <Link href="/" className="text-2xl font-bold">
        Profile
      </Link>
      <div className="hidden md:flex space-x-8">
        <Link
          href="/"
          className="text-primary font-semibold underline underline-offset-8"
        >
          Home
        </Link>
        <Link href="/" className="hover:underline hover:underline-offset-8">
          About
        </Link>
        <Link href="/" className="hover:underline hover:underline-offset-8">
          Sign Up
        </Link>
      </div>
      <CartLink />
    </nav>
  );
}
