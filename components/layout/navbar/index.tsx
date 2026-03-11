import CartModal from "components/cart/modal";
import Image from "next/image";
import Link from "next/link";
import { NavMenu } from "./nav-menu";
import { MagnifyingGlassIcon, UserIcon } from "@heroicons/react/24/outline";

export async function Navbar() {
  return (
    <nav className="relative flex items-center justify-between border-b border-neutral-700 bg-black px-8 py-10">
      {/* Logo */}
      <div className="flex-none">
        <Link
          href="/"
          prefetch={true}
          className="flex items-center gap-2"
        >
          <Image
            src="/logo.png"
            alt="BCYL Pokishop"
            width={68}
            height={68}
            className="h-[100px] w-[100px] object-contain"
            priority
          />
        </Link>
      </div>

      {/* Center Menu */}
      <NavMenu />

      {/* Right Icons */}
      <div className="flex items-center justify-end gap-6">
        <Link href="/search" className="text-white transition-colors hover:text-cyan-400">
          <MagnifyingGlassIcon className="h-6 w-6" />
        </Link>
        <Link href="/account" className="text-white transition-colors hover:text-cyan-400">
          <UserIcon className="h-6 w-6" />
        </Link>
        <CartModal />
      </div>
    </nav>
  );
}
