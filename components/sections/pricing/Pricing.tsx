import Link from "next/link";
import { Button } from "@/components/ui/Button";

import { CheckIcon } from "@heroicons/react/20/solid";

const tiers = [
  {
    name: "Basic",
    id: "tier-hobby",
    href: "#",
    priceMonthly: "5.99 TND",
    description:
      "This is the perfect plan for the hobbyist who’s just getting started.",
    features: [
      "10 pages limit for each document",
      "512MB of storage",
      "20 messages an hour",
      "Unlimited conversations",
      "Best support",
    ],
  },
  {
    name: "Premium",
    id: "tier-team",
    href: "#",
    priceMonthly: "10.99 TND",
    description:
      "For heavy use and more premium features, go with the Premium plan.",
    features: [
      "Unlimited pages for each document",
      "1GB of storage",
      "100 messages an hour",
      "Unlimited conversations",
      "Instant messaging",
      "Priority support",
    ],
  },
];

export default function Pricing() {
  return (
    <div className="isolate overflow-hidden bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 pb-96 pt-24 text-center sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-base font-semibold leading-7 text-sky-400">
            Pricing
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            The right price for you,{" "}
            <br className="hidden sm:inline lg:hidden" />
            whoever you are
          </p>
        </div>
        <div className="relative mt-6">
          <p className="mx-auto max-w-2xl text-lg leading-8 text-white/60">
            We thought of everyone when pricing our product, so we have a plan
            for everyone.
          </p>
          <svg
            viewBox="0 0 1208 1024"
            className="absolute -top-10 left-1/2 -z-10 h-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:-top-12 md:-top-20 lg:-top-12 xl:top-0"
          >
            <ellipse
              cx={604}
              cy={512}
              fill="url(#6d1bd035-0dd1-437e-93fa-59d316231eb0)"
              rx={604}
              ry={512}
            />
            <defs>
              <radialGradient id="6d1bd035-0dd1-437e-93fa-59d316231eb0">
                <stop stopColor="#00FFFF" />
                <stop offset={1} stopColor="#008080" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="flow-root bg-white pb-24 sm:pb-32">
        <div className="-mt-80">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2">
              {tiers.map((tier) => (
                <div
                  key={tier.id}
                  className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10"
                >
                  <div>
                    <h3
                      id={tier.id}
                      className="text-base font-semibold leading-7 text-sky-600"
                    >
                      {tier.name}
                    </h3>
                    <div className="mt-4 flex items-baseline gap-x-2">
                      <span className="text-5xl font-bold tracking-tight text-gray-900">
                        {tier.priceMonthly}
                      </span>
                      <span className="text-base font-semibold leading-7 text-gray-600">
                        /month
                      </span>
                    </div>
                    <p className="mt-6 text-base leading-7 text-gray-600">
                      {tier.description}
                    </p>
                    <ul
                      role="list"
                      className="mt-10 space-y-4 text-sm leading-6 text-gray-600"
                    >
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex gap-x-3">
                          <CheckIcon
                            className="h-6 w-5 flex-none text-sky-600"
                            aria-hidden="true"
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link href={tier.href} aria-describedby={tier.id}>
                    <Button className="items-center mt-8 w-full bg-sky-600 hover:bg-sky-500 font-semibold">
                      Get started today
                    </Button>
                  </Link>
                </div>
              ))}
              <div className="flex flex-col items-start gap-x-8 gap-y-6 rounded-3xl p-8 ring-1 ring-gray-900/10 sm:gap-y-10 sm:p-10 lg:col-span-2 lg:flex-row lg:items-center">
                <div className="lg:min-w-0 lg:flex-1">
                  <h3 className="text-lg font-semibold leading-8 tracking-tight text-sky-600">
                    Students and teachers
                  </h3>
                  <p className="mt-1 text-base leading-7 text-gray-600">
                    Collaborating with Github, we offer a free plan for
                    students, teachers and researchers. Apply for a free plan
                    with your academic email or log in with your existing Github
                    account.
                  </p>
                </div>
                <Link href="/education">
                  <Button
                    className="font-semibold leading-6 text-sky-600 hover:text-sky-700 ring-1 ring-inset ring-sky-200 hover:ring-sky-300"
                    variant={"outline"}
                  >
                    Apply now <span aria-hidden="true">&rarr;</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
