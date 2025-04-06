"use client";

import Link from "next/link";
import { Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 py-8 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <Link
            href="https://github.com/yourusername/farmsmart-ai"
            className="text-gray-400 hover:text-gray-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="sr-only">GitHub</span>
            <Github className="h-6 w-6" />
          </Link>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 mb-4">
            <Link href="/" className="text-sm text-gray-500 hover:text-green-600">
              Home
            </Link>
            <Link href="/about" className="text-sm text-gray-500 hover:text-green-600">
              About
            </Link>
            <Link href="/privacy" className="text-sm text-gray-500 hover:text-green-600">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-gray-500 hover:text-green-600">
              Terms
            </Link>
            <Link href="/contact" className="text-sm text-gray-500 hover:text-green-600">
              Contact
            </Link>
          </div>
          <p className="text-center text-xs text-gray-500">
            &copy; {new Date().getFullYear()} FarmSmart AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
