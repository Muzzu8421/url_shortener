import Link from "next/link";

const StaticFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-purple-500 bg-purple-400 dark:border-purple-900 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 py-2 sm:px-6 sm:py-4 lg:px-8">
        <div className="flex flex-col items-center justify-center sm:gap-1 sm:flex-row">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <h2 className="flex items-center text-lg font-extrabold tracking-tight">
              <span className="text-gray-900 dark:text-white">URL</span>
              <span className="mx-1 inline-block animate-pulse text-yellow-300 dark:text-green-400">
                /
              </span>
              <span className="text-purple-950 dark:text-purple-300">
                Shortener
              </span>
            </h2>
          </Link>

          {/* Copyright */}
          <p className="text-sm text-gray-900 dark:text-gray-300">
            © {currentYear} URL Shortener. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default StaticFooter;