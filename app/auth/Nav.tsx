import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex flex-col py-8">
      <Link href={"/"}>
        <h1 className="font-bold text-3xl tracking-wide">confession hub.</h1>
      </Link>
      <h3 className="text-gray-500 font-semibold text-sm tracking-widest">
        specifically for S1M classmate.
      </h3>
    </nav>
  );
}
