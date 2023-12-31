import Link from "next/link";

import { GithubIcon } from "@/components/icons/Overall";

const navigation = {
  main: [
    { name: "Features", href: "#features" },
    { name: "Documentation", href: "/docs" },
    { name: "Changelog", href: "/changelog" },
  ],
  social: [
    {
      name: "GitHub",
      href: "https://github.com/FindMalek/undrstnd",
      icon: GithubIcon,
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav
          className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <Link
                href={item.href}
                className="text-sm leading-6 px-3 py-2 rounded-xl transition-colors delay-75 hover:delay-[150ms] text-gray-600 hover:text-gray-900 hover:bg-slate-300/40"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        <div className="mt-10 flex justify-center space-x-10">
          {navigation.social.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              target="_blank"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">{item.name}</span>
              {/* @ts-ignore */}
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </Link>
          ))}
        </div>
        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
          &copy; {new Date().getFullYear()} Undrstnd, Inc. All rights reserved.
          Created by{" "}
          <Link
            target="_blank"
            className="text-sky-600"
            href="https://findservices.tech"
          >
            FindServices
          </Link>
          .
        </p>
      </div>
    </footer>
  );
}
