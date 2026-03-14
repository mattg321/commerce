"use client";

import { Dialog, Transition } from "@headlessui/react";
import { UserIcon, XMarkIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { Fragment, useState, type FormEvent } from "react";

type AuthMode = "login" | "signup";

export default function AuthModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<AuthMode>("login");

  const openModal = (nextMode: AuthMode = "login") => {
    setMode(nextMode);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    closeModal();
  };

  return (
    <>
      <button
        aria-label="Open login and signup form"
        onClick={() => openModal("login")}
        className="text-white transition-colors hover:text-neutral-300"
      >
        <UserIcon className="h-6 w-6" />
      </button>

      <Transition show={isOpen} as={Fragment}>
        <Dialog onClose={closeModal} className="relative z-50">
          <Transition.Child
            as={Fragment}
            enter="transition-opacity duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/80" aria-hidden="true" />
          </Transition.Child>

          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="transition-all duration-200"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transition-all duration-150"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md rounded-2xl border border-neutral-700 bg-neutral-950 p-6 text-white shadow-2xl">
                <div className="flex items-center justify-between">
                  <Dialog.Title className="text-2xl font-semibold tracking-tight">
                    {mode === "login" ? "Login" : "Create Account"}
                  </Dialog.Title>
                  <button
                    aria-label="Close login and signup form"
                    onClick={closeModal}
                    className="rounded-md p-1 text-neutral-300 transition-colors hover:bg-neutral-800 hover:text-white"
                  >
                    <XMarkIcon className="h-5 w-5" />
                  </button>
                </div>

                <div className="mt-5 grid grid-cols-2 rounded-lg bg-neutral-900 p-1">
                  <button
                    onClick={() => setMode("login")}
                    className={clsx(
                      "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                      mode === "login"
                        ? "bg-neutral-200 text-black"
                        : "text-neutral-300 hover:bg-neutral-800 hover:text-white",
                    )}
                  >
                    Login
                  </button>
                  <button
                    onClick={() => setMode("signup")}
                    className={clsx(
                      "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                      mode === "signup"
                        ? "bg-neutral-200 text-black"
                        : "text-neutral-300 hover:bg-neutral-800 hover:text-white",
                    )}
                  >
                    Sign Up
                  </button>
                </div>

                {mode === "login" ? (
                  <form onSubmit={handleSubmit} className="mt-5 space-y-3">
                    <input
                      type="email"
                      required
                      placeholder="Email"
                      className="h-11 w-full rounded-md border border-neutral-700 bg-neutral-900 px-3 text-sm text-white outline-none placeholder:text-neutral-500 focus:border-neutral-400"
                    />
                    <input
                      type="password"
                      required
                      placeholder="Password"
                      className="h-11 w-full rounded-md border border-neutral-700 bg-neutral-900 px-3 text-sm text-white outline-none placeholder:text-neutral-500 focus:border-neutral-400"
                    />
                    <button
                      type="submit"
                      className="mt-2 h-11 w-full rounded-md bg-neutral-200 text-sm font-semibold text-black transition-colors hover:bg-neutral-300"
                    >
                      Log In
                    </button>
                  </form>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-5 space-y-3">
                    <input
                      type="text"
                      required
                      placeholder="Full Name"
                      className="h-11 w-full rounded-md border border-neutral-700 bg-neutral-900 px-3 text-sm text-white outline-none placeholder:text-neutral-500 focus:border-neutral-400"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Email"
                      className="h-11 w-full rounded-md border border-neutral-700 bg-neutral-900 px-3 text-sm text-white outline-none placeholder:text-neutral-500 focus:border-neutral-400"
                    />
                    <input
                      type="password"
                      required
                      placeholder="Password"
                      className="h-11 w-full rounded-md border border-neutral-700 bg-neutral-900 px-3 text-sm text-white outline-none placeholder:text-neutral-500 focus:border-neutral-400"
                    />
                    <input
                      type="password"
                      required
                      placeholder="Confirm Password"
                      className="h-11 w-full rounded-md border border-neutral-700 bg-neutral-900 px-3 text-sm text-white outline-none placeholder:text-neutral-500 focus:border-neutral-400"
                    />
                    <button
                      type="submit"
                      className="mt-2 h-11 w-full rounded-md bg-neutral-200 text-sm font-semibold text-black transition-colors hover:bg-neutral-300"
                    >
                      Create Account
                    </button>
                  </form>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
