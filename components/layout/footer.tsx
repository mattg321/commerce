import Link from "next/link";
import { CameraIcon, MusicalNoteIcon } from "@heroicons/react/24/outline";

const { SITE_NAME } = process.env;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <section className="relative overflow-hidden bg-[linear-gradient(115deg,#2a8fb4_0%,#6a1b8f_50%,#8c6320_100%)] px-4 py-20 text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(123,210,255,0.22),transparent_42%),radial-gradient(circle_at_52%_62%,rgba(255,0,166,0.2),transparent_45%),radial-gradient(circle_at_85%_30%,rgba(255,190,70,0.2),transparent_35%)]" />
        <div className="relative mx-auto max-w-3xl text-center">
          <h3 className="text-4xl font-medium tracking-tight">Join the BCYL community</h3>
          <p className="mt-3 text-sm text-neutral-100">
            Get 5% off your first order + early access to drops.
          </p>
          <form className="mx-auto mt-8 flex w-full max-w-2xl flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="you@example.com"
              className="h-11 flex-1 rounded-md border-0 px-4 text-sm text-black outline-none ring-2 ring-transparent placeholder:text-neutral-500 focus:ring-cyan-300"
            />
            <button
              type="button"
              className="h-11 rounded-md bg-cyan-400 px-7 text-sm font-semibold text-black transition-colors hover:bg-cyan-300"
            >
              Subscribe!
            </button>
          </form>
        </div>
      </section>

      <section className="bg-[radial-gradient(120%_100%_at_0%_0%,#171d48_0%,#070a17_55%,#060815_100%)] px-4 py-12 text-white">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-cyan-300">Help</h4>
              <ul className="mt-4 space-y-3 text-base text-neutral-100">
                <li>
                  <Link href="/contact" className="hover:text-cyan-300">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/shipping" className="hover:text-cyan-300">
                    Shipping Info
                  </Link>
                </li>
                <li>
                  <Link href="/returns" className="hover:text-cyan-300">
                    Returns
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-cyan-300">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-cyan-300">About Us</h4>
              <ul className="mt-4 space-y-3 text-base text-neutral-100">
                <li>
                  <Link href="/about" className="hover:text-cyan-300">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-cyan-300">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-cyan-300">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-cyan-300">Socials</h4>
              <div className="mt-4 flex items-center gap-3">
                <a
                  aria-label="Instagram"
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-cyan-400 hover:text-black"
                >
                  <CameraIcon className="h-5 w-5" />
                </a>
                <a
                  aria-label="TikTok"
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-cyan-400 hover:text-black"
                >
                  <MusicalNoteIcon className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-cyan-300">
                {(SITE_NAME || "BCYL.POKISHOP").toUpperCase()}
              </h4>
            </div>
          </div>

          <div className="mt-12 border-t border-white/15 pt-6 text-center text-sm text-neutral-300">
            bcyl.pokishop LLC © {currentYear} | All rights reserved
          </div>
        </div>
      </section>
    </footer>
  );
}
