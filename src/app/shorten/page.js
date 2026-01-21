"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Link2, Copy, Check, Loader2, AlertCircle, ExternalLink } from "lucide-react";

const ShortenPage = () => {
  const [url, setUrl] = useState("");
  const [customUrl, setCustomUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const [useCustom, setUseCustom] = useState(false);

  const handleGenerate = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Validate custom URL if provided
    if (useCustom && customUrl) {
      const validPattern = /^[a-zA-Z0-9-_]+$/;
      if (!validPattern.test(customUrl)) {
        setError("Custom URL can only contain letters, numbers, hyphens, and underscores");
        setLoading(false);
        return;
      }
    }

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      url: url,
      shortUrl: useCustom ? customUrl : null,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.success) {
          setShortUrl(result.shortUrl);
          setUrl("");
          setCustomUrl("");
          setLoading(false);
        } else {
          setError(result.message);
          setLoading(false);
        }
      })
      .catch((error) => {
        setError("An error occurred. Please try again.");
        setLoading(false);
        console.error(error);
      });
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shortUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="flex justify-center min-h-[calc(92.9vh-4rem)] items-start py-6 md:py-6 bg-linear-to-b from-purple-50 via-white to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-950">
      <div className="mx-auto w-full max-w-2xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        {/* Header */}
        <div className="mb-4 text-center sm:mb-6 md:mb-8">
          <div className="mb-3 flex justify-center sm:mb-4">
            <div className="rounded-full bg-purple-100 p-2.5 dark:bg-purple-900/30 sm:p-3">
              <Link2
                size={24}
                className="text-purple-600 dark:text-purple-400 sm:h-7 sm:w-7"
              />
            </div>
          </div>
          <h1 className="mb-2 text-xl font-extrabold text-gray-900 dark:text-white sm:text-2xl md:text-3xl lg:text-4xl">
            Shorten Your URL
          </h1>
          <p className="text-xs text-gray-600 dark:text-gray-300 sm:text-sm md:text-base">
            Paste your long URL and get a short link instantly
          </p>
        </div>

        {/* Form Card */}
        <div className="rounded-xl bg-white p-4 shadow-xl dark:bg-gray-900 sm:rounded-2xl sm:p-5 md:p-6">
          <form onSubmit={handleGenerate} className="space-y-3 sm:space-y-4">
            {/* URL Input */}
            <div>
              <label
                htmlFor="url"
                className="mb-1.5 block text-xs font-semibold text-gray-900 dark:text-white sm:mb-2 sm:text-sm"
              >
                Enter your long URL
              </label>
              <input
                type="url"
                id="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://example.com/very/long/url/path"
                className="w-full rounded-lg border-2 border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-400 transition-colors focus:border-purple-500 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500 dark:focus:border-purple-400 sm:px-4 sm:py-2.5 sm:text-base"
                required
                disabled={loading}
              />
            </div>

            {/* Custom URL Toggle */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="useCustom"
                checked={useCustom}
                onChange={(e) => setUseCustom(e.target.checked)}
                className="h-4 w-4 cursor-pointer rounded border-gray-300 text-purple-600 focus:ring-2 focus:ring-purple-500 dark:border-gray-600 dark:bg-gray-800"
                disabled={loading}
              />
              <label
                htmlFor="useCustom"
                className="cursor-pointer text-xs font-medium text-gray-900 dark:text-white sm:text-sm"
              >
                Use custom short URL (optional)
              </label>
            </div>

            {/* Custom URL Input */}
            {useCustom && (
              <div className="space-y-1.5">
                <label
                  htmlFor="customUrl"
                  className="block text-xs font-semibold text-gray-900 dark:text-white sm:text-sm"
                >
                  Custom short URL
                </label>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500 dark:text-gray-400 sm:text-sm whitespace-nowrap">
                    {typeof window !== 'undefined' ? window.location.origin : ''}/
                  </span>
                  <input
                    type="text"
                    id="customUrl"
                    value={customUrl}
                    onChange={(e) => setCustomUrl(e.target.value)}
                    placeholder="my-custom-link"
                    className="flex-1 rounded-lg border-2 border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-400 transition-colors focus:border-purple-500 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500 dark:focus:border-purple-400 sm:px-4 sm:py-2.5 sm:text-base"
                    disabled={loading}
                  />
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Use letters, numbers, hyphens, and underscores only.
                </p>
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="flex items-start gap-2 rounded-lg bg-red-50 p-2.5 text-xs text-red-800 dark:bg-red-900/20 dark:text-red-400 sm:items-center sm:p-3 sm:text-sm">
                <AlertCircle size={16} className="mt-0.5 shrink-0 sm:mt-0 sm:h-4.5 sm:w-4.5" />
                <span className="wrap-break-word">{error}</span>
              </div>
            )}

            {/* Generate Button */}
            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white shadow-lg cursor-pointer transition-all hover:bg-gray-950 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-purple-600 dark:hover:bg-purple-500 sm:rounded-xl sm:px-6 sm:py-2.5 sm:text-base md:py-3"
            >
              {loading ? (
                <>
                  <Loader2 size={18} className="animate-spin sm:h-5 sm:w-5" />
                  <span>Generating...</span>
                </>
              ) : (
                <>
                  <Link2 size={18} className="sm:h-5 sm:w-5" />
                  <span>Generate Short URL</span>
                </>
              )}
            </button>
          </form>

          {/* Result Section */}
          {shortUrl && (
            <div className="mt-3 space-y-2.5 rounded-lg bg-linear-to-br from-purple-50 to-purple-100 p-3 dark:from-purple-900/20 dark:to-purple-800/20 sm:mt-4 sm:space-y-3 sm:p-4">
              <p className="text-xs font-semibold text-gray-900 dark:text-white sm:text-sm">
                Your shortened URL:
              </p>
              
              {/* URL Display with Link */}
              <Link 
                href={shortUrl} 
                target="_blank"
                className="group block w-full rounded-lg border-2 border-gray-900 bg-white px-3 py-2 transition-all hover:border-gray-950 hover:shadow-md dark:border-purple-400 dark:bg-gray-800 dark:hover:border-purple-500 sm:px-4 sm:py-2.5"
              >
                <div className="flex items-center justify-between gap-2">
                  <code className="truncate text-xs font-medium text-gray-900 dark:text-purple-400 sm:text-sm md:text-base">
                    {shortUrl}
                  </code>
                  <ExternalLink 
                    size={14} 
                    className="shrink-0 text-gray-900 opacity-0 transition-opacity group-hover:opacity-100 dark:text-purple-400 sm:h-4 sm:w-4" 
                  />
                </div>
              </Link>

              {/* Copy Button */}
              <button
                onClick={handleCopy}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-xs font-semibold text-white cursor-pointer transition-colors hover:bg-gray-950 dark:bg-purple-600 dark:hover:bg-purple-500 sm:px-6 sm:py-2.5 sm:text-sm"
              >
                {copied ? (
                  <>
                    <Check size={16} className="sm:h-4.5 sm:w-4.5" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={16} className="sm:h-4.5 sm:w-4.5" />
                    <span>Copy to Clipboard</span>
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShortenPage;