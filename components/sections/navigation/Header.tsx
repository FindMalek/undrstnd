"use client";

import Link from "next/link";
import { Popover } from "@headlessui/react";

import { Button } from "@/components/ui/Button";
import Container from "@/components/ui/Container";

import { Logo } from "@/components/icons/Overall";
import { MenuIcon, ChevronUpIcon } from "@/components/icons/Navbar";

import NavLinks from "@/components/sections/navigation/NavLinks";
import MobileAnimatePresence from "@/components/sections/navigation/MobileAnimatePresence";

export default function Header() {
  return (
    <header>
      <nav>
        <Container className="relative z-50 flex justify-between py-8">
          <div className="relative z-10 flex items-center gap-10">
            <Link href="/" aria-label="Home">
              <div className="flex items-center gap-2">
                <Logo className="-mt-1 h-10 w-auto" />
                <p className="text-zinc-700 text-base font-bold ">
                  Undrstnd
                </p>
              </div>
            </Link>
            <div className="hidden lg:flex lg:gap-10">
              <NavLinks />
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Popover className="lg:hidden">
              {({ open }) => (
                <>
                  <Popover.Button
                    className="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-gray-900 p-2 hover:bg-gray-800/50 hover:stroke-gray-600 active:stroke-gray-900 [&:not(:focus-visible)]:focus:outline-none"
                    aria-label="Toggle site navigation"
                  >
                    {({ open }) =>
                      open ? (
                        <ChevronUpIcon className="h-6 w-6" />
                      ) : (
                        <MenuIcon className="h-6 w-6" />
                      )
                    }
                  </Popover.Button>
                  <MobileAnimatePresence open={open} />
                </>
              )}
            </Popover>
            <Link href="/login">
              <Button variant="outline" className="hidden lg:block">
                Log in
              </Button>
            </Link>
            <Link href="/register">
              <Button className="hidden lg:block bg-sky-600 hover:bg-sky-700">Register</Button>
            </Link>
          </div>
        </Container>
      </nav>
    </header>
  );
}
