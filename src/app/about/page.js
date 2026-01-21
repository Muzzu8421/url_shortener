"use client";

import React from "react";
import Link from "next/link";
import { Link2, Zap, Shield, Code, Heart, ArrowRight } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-purple-50 via-white to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-950">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        {/* Header */}
        <div className="mb-12 text-center sm:mb-16">
          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-purple-100 p-4 dark:bg-purple-900/30">
              <Link2 size={40} className="text-purple-600 dark:text-purple-400" />
            </div>
          </div>
          <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl md:text-5xl">
            About URL Shortener
          </h1>
          <p className="mx-auto max-w-2xl text-base text-gray-600 dark:text-gray-300 sm:text-lg">
            Making the web more accessible, one link at a time
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-12 rounded-2xl bg-white p-6 shadow-xl dark:bg-gray-900 sm:p-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
            Our Mission
          </h2>
          <p className="mb-4 text-base leading-relaxed text-gray-600 dark:text-gray-300 sm:text-lg">
            We believe that sharing links should be simple, fast, and accessible to everyone. 
            URL Shortener was created to provide a straightforward solution for transforming 
            long, unwieldy URLs into clean, shareable links that are easy to remember and use.
          </p>
          <p className="text-base leading-relaxed text-gray-600 dark:text-gray-300 sm:text-lg">
            Whether you&apos;re sharing on social media, sending links in messages, or organizing 
            your digital content, we&apos;re here to make your life easier.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mb-12">
          <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
            Why Choose Us?
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="rounded-xl bg-white p-6 shadow-lg transition-transform hover:-translate-y-1 dark:bg-gray-900">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30">
                <Zap className="text-purple-600 dark:text-purple-400" size={24} />
              </div>
              <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
                Lightning Fast
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Generate short URLs in seconds. No waiting, no hassle, just instant results.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="rounded-xl bg-white p-6 shadow-lg transition-transform hover:-translate-y-1 dark:bg-gray-900">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30">
                <Link2 className="text-purple-600 dark:text-purple-400" size={24} />
              </div>
              <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
                Custom Links
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Create personalized short URLs that match your brand or preference.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="rounded-xl bg-white p-6 shadow-lg transition-transform hover:-translate-y-1 dark:bg-gray-900">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30">
                <Shield className="text-purple-600 dark:text-purple-400" size={24} />
              </div>
              <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
                100% Free
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Completely free to use. No hidden fees, no subscriptions, no limits.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="rounded-xl bg-white p-6 shadow-lg transition-transform hover:-translate-y-1 dark:bg-gray-900">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30">
                <Code className="text-purple-600 dark:text-purple-400" size={24} />
              </div>
              <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
                Simple & Clean
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                No complicated setup or registration. Just paste your URL and go.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="rounded-xl bg-white p-6 shadow-lg transition-transform hover:-translate-y-1 dark:bg-gray-900">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30">
                <Shield className="text-purple-600 dark:text-purple-400" size={24} />
              </div>
              <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
                Reliable
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Your links are stored securely and will work whenever you need them.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="rounded-xl bg-white p-6 shadow-lg transition-transform hover:-translate-y-1 dark:bg-gray-900">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30">
                <Heart className="text-purple-600 dark:text-purple-400" size={24} />
              </div>
              <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
                User Focused
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Built with you in mind. Simple interface, powerful features.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="rounded-2xl bg-linear-to-br from-purple-600 to-purple-800 p-8 text-center shadow-xl sm:p-12">
          <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl">
            Ready to Get Started?
          </h2>
          <p className="mb-6 text-base text-purple-100 sm:text-lg">
            Start shortening your URLs today and experience the simplicity
          </p>
          <Link
            href="/shorten"
            className="inline-flex items-center gap-2 rounded-xl bg-gray-900 px-8 py-3 font-semibold text-white transition-all hover:bg-gray-950 hover:shadow-lg sm:px-10 sm:py-4"
          >
            Try It Now
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;