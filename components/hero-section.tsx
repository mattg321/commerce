'use client';

import Link from 'next/link';

export function HeroSection() {
  return (
    <div
      className="relative flex bg-contain bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/BCYL_hero.png')", aspectRatio: '16 / 9' }}
    >
      {/* Content */}
      <div className="relative z-10 flex w-full flex-col items-center justify-end px-4 pb-12">
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="/search/pokemon-jp"
            className="rounded-lg border-2 border-white px-8 py-3 font-bold text-white transition-all hover:scale-105 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/50"
          >
            Shop Pokémon
          </Link>
          <Link
            href="/search"
            className="rounded-lg border-2 border-white px-8 py-3 font-bold text-white transition-all hover:scale-105 hover:border-pink-500 hover:shadow-lg hover:shadow-pink-500/50"
          >
            Shop All
          </Link>
        </div>
      </div>
    </div>
  );
}
