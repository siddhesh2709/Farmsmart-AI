"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  Home,
  Sprout,
  Cloud,
  BarChart3,
  MessageSquare,
  UserCircle
} from "lucide-react";

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "Crop Advisory", href: "/crop-advisory", icon: Sprout },
  { name: "Weather", href: "/weather", icon: Cloud },
  { name: "Market Prices", href: "/market-prices", icon: BarChart3 },
  { name: "AI Assistant", href: "/ai-assistant", icon: MessageSquare },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <span className="text-2xl font-bold text-green-600">FarmSmart</span>
            <span className="bg-green-600 text-white px-2 py-1 rounded text-sm font-semibold">AI</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <Button
            variant="ghost"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-1 text-sm font-semibold leading-6 ${
                pathname === item.href ? 'text-green-600' : 'text-gray-700 hover:text-green-600'
              }`}
            >
              <item.icon className="h-4 w-4" />
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button variant="outline" size="sm" className="gap-2">
            <UserCircle className="h-4 w-4" />
            <span>Sign In</span>
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-white">
          <div className="fixed inset-0 flex">
            <div className="relative flex w-full flex-1 flex-col overflow-y-auto pb-4">
              <div className="flex items-center justify-between px-6 py-4 border-b">
                <Link href="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                  <span className="text-2xl font-bold text-green-600">FarmSmart</span>
                  <span className="bg-green-600 text-white px-2 py-1 rounded text-sm font-semibold">AI</span>
                </Link>
                <Button variant="ghost" onClick={() => setMobileMenuOpen(false)}>
                  <X className="h-6 w-6" />
                </Button>
              </div>
              <div className="mt-4 space-y-2 px-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-semibold ${
                      pathname === item.href
                        ? 'bg-green-50 text-green-600'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-green-600'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <item.icon className="h-5 w-5" />
                    {item.name}
                  </Link>
                ))}
                <Button variant="outline" size="lg" className="w-full mt-4 gap-2">
                  <UserCircle className="h-5 w-5" />
                  <span>Sign In</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
