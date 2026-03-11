'use client';

import Link from 'next/link';

export function NavMenu() {
  return (
    <div className="flex flex-1 justify-center">
      <ul className="flex items-center gap-12 text-sm font-medium">
        <li>
          <Link
            href="/"
            className="text-white transition-colors hover:text-cyan-400"
          >
            Home
          </Link>
        </li>

        {/* Pokemon JP */}
        <li>
          <Link
            href="/search/pokemon-jp"
            className="text-white transition-colors hover:text-cyan-400"
          >
            Pokémon (JP)
          </Link>
        </li>

        {/* Pokemon EN */}
        <li>
          <Link
            href="/search/pokemon-en"
            className="text-white transition-colors hover:text-cyan-400"
          >
            Pokémon (EN)
          </Link>
        </li>

        {/* Blind Boxes */}
        <li>
          <Link
            href="/search/blind-boxes"
            className="text-white transition-colors hover:text-cyan-400"
          >
            Blind Boxes
          </Link>
        </li>

        <li>
          <Link
            href="/contact"
            className="text-white transition-colors hover:text-cyan-400"
          >
            Contact
          </Link>
        </li>

        <li>
          <Link
            href="/about"
            className="text-white transition-colors hover:text-cyan-400"
          >
            About Us
          </Link>
        </li>

        <li>
          <Link
            href="/search"
            className="text-white transition-colors hover:text-cyan-400"
          >
            Shop All
          </Link>
        </li>
      </ul>
    </div>
  );
}
