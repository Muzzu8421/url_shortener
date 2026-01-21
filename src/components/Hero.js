"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Link2, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-purple-50 via-white to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-950">
      <div className="mx-auto max-w-7xl px-4 py-[2.65rem] sm:px-6 sm:py-12 md:py-16 lg:px-8 lg:py-23">
        <div className="grid items-center gap-6 sm:gap-10 md:gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Side - Text Content */}
          <div className="space-y-6 text-center sm:space-y-8 lg:text-left">
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white sm:text-4xl md:text-5xl lg:text-6xl">
                The World&apos;s Most <span className="text-purple-600 drop-shadow-sm dark:text-purple-400">Straightforward</span> URL Shortener
              </h1>

              <p className="mx-auto max-w-xl text-base leading-relaxed text-gray-600 dark:text-gray-300 sm:text-lg md:text-xl lg:mx-0">
                Transform your long, unwieldy links into clean, shareable URLs in
                seconds. Simple, fast, and absolutely free.
              </p>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:justify-start">
              <div className="flex items-center gap-1.5 sm:gap-2 rounded-full bg-purple-100 px-3 py-1.5 sm:px-4 sm:py-2 shadow-sm backdrop-blur-sm dark:bg-purple-900/30">
                <Zap size={14} className="text-purple-600 dark:text-purple-400 sm:h-4 sm:w-4" />
                <span className="text-xs sm:text-sm font-medium text-purple-900 dark:text-purple-300">
                  Lightning Fast
                </span>
              </div>

              <div className="flex items-center gap-1.5 sm:gap-2 rounded-full bg-purple-100 px-3 py-1.5 sm:px-4 sm:py-2 shadow-sm backdrop-blur-sm dark:bg-purple-900/30">
                <Link2
                  size={14}
                  className="text-purple-600 dark:text-purple-400 sm:h-4 sm:w-4"
                />
                <span className="text-xs sm:text-sm font-medium text-purple-900 dark:text-purple-300">
                  Custom Links
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Link
                href="/shorten"
                className="group flex items-center justify-center gap-2 rounded-xl bg-gray-900 px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold text-white shadow-lg shadow-gray-900/30 transition-all hover:-translate-y-0.5 hover:bg-gray-950 hover:shadow-xl active:translate-y-0 dark:bg-purple-600 dark:hover:bg-purple-500"
              >
                Get Started Free
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1 sm:h-5 sm:w-5"
                />
              </Link>

              <Link
                href="/about"
                className="flex items-center justify-center gap-2 rounded-xl border-2 border-gray-900 px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold text-gray-900 transition-all hover:-translate-y-0.5 hover:bg-gray-900 hover:text-white active:translate-y-0 dark:border-purple-400 dark:text-purple-400 dark:hover:bg-purple-900/20"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Right Side - Image/Illustration */}
          <div className="relative mt-6 sm:mt-8 lg:mt-0">
            <div className="relative rounded-2xl sm:rounded-3xl bg-linear-to-br from-purple-400 to-purple-600 p-5 sm:p-8 shadow-2xl backdrop-blur-xl dark:from-purple-600 dark:to-purple-800">
              {/* Decorative Elements */}
              <div className="absolute -right-3 -top-3 sm:-right-4 sm:-top-4 h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-yellow-300 opacity-30 blur-2xl sm:blur-3xl"></div>
              <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 h-24 w-24 sm:h-32 sm:w-32 rounded-full bg-pink-300 opacity-30 blur-2xl sm:blur-3xl"></div>

              {/* URL Shortening Visualization */}
              <div className="relative space-y-3 sm:space-y-6">
                {/* Long URL */}
                <div className="rounded-lg sm:rounded-xl bg-white/15 p-2.5 sm:p-4 shadow-sm backdrop-blur-md">
                  <div className="mb-1 sm:mb-2 text-xs font-semibold tracking-wide text-white/70">
                    BEFORE
                  </div>
                  <div className="overflow-hidden rounded bg-white/20 px-2 py-1.5 sm:px-3 sm:py-2">
                    <p className="truncate text-xs sm:text-sm text-white">
                      https://example.com/very/long/url/...
                    </p>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <div className="rounded-full bg-white/30 p-2.5 sm:p-3 shadow-lg">
                    <ArrowRight size={18} className="text-white sm:h-6 sm:w-6" strokeWidth={2.5} />
                  </div>
                </div>

                {/* Short URL */}
                <div className="rounded-lg sm:rounded-xl bg-white/15 p-2.5 sm:p-4 shadow-sm backdrop-blur-md">
                  <div className="mb-1 sm:mb-2 text-xs font-semibold tracking-wide text-white/70">
                    AFTER
                  </div>
                  <div className="overflow-hidden rounded bg-white px-2 py-1.5 sm:px-3 sm:py-2">
                    <p className="text-xs sm:text-sm font-bold text-purple-600">
                      short.ly/abc123
                    </p>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-2.5 sm:gap-4 pt-1 sm:pt-4">
                  <div className="rounded-lg sm:rounded-xl bg-white/15 p-2 sm:p-3 text-center shadow-sm backdrop-blur-md">
                    <div className="text-lg sm:text-2xl font-bold text-white">99%</div>
                    <div className="text-xs text-white/70">Shorter</div>
                  </div>
                  <div className="rounded-lg sm:rounded-xl bg-white/15 p-2 sm:p-3 text-center shadow-sm backdrop-blur-md">
                    <div className="text-lg sm:text-2xl font-bold text-white">100%</div>
                    <div className="text-xs text-white/70">Free</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Right Side */}
        </div>
      </div>
    </section>
  );
};

export default Hero;