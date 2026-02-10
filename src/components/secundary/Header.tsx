"use client";

import React, { useState, useEffect } from "react";
import {
  Menu,
  Phone,
  ArrowRight,
  Home,
  Scale,
  Gavel,
  MapPin,
  BookOpen,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { label: "Inicio", href: "/", icon: Home },
  { label: "Bufete", href: "#nosotros", icon: Scale },
  { label: "Servicios", href: "#servicios", icon: Gavel },
  { label: "Oficinas", href: "#oficinas", icon: MapPin },
  { label: "Blog", href: "#blog", icon: BookOpen },
  { label: "Contacto", href: "#contacto", icon: Phone },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-100 transition-all duration-500",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-4 border-b border-primary/5"
          : "bg-transparent py-8",
      )}
    >
      <div className="max-w-[1400px] mx-auto flex justify-between items-center px-8 relative">
        <div className="flex items-center relative z-10">
          <a
            href="/"
            className="transition-transform hover:scale-105 duration-300"
          >
            <img
              src="/src/assets/images/logo.png"
              alt="Logo"
              className="h-8 md:h-12 w-auto object-contain"
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex gap-10">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={cn(
                    "text-[0.95rem] font-semibold transition-all duration-300 hover:text-primary relative group",
                    "text-gray-900",
                  )}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-6">
          <div className="hidden lg:block">
            <a
              href="#"
              className="bg-primary hover:bg-primary-dark text-white px-8 py-3.5 rounded-sm font-bold text-xs uppercase tracking-widest transition-all hover:-translate-y-1 hover:shadow-xl active:translate-y-0"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button
                  className="p-2 -mr-2 text-gray-900 hover:text-primary transition-colors duration-300 focus:outline-none"
                  aria-label="Abrir menú"
                >
                  <Menu className="h-8 w-8" />
                </button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[320px] bg-white border-l-primary/10 p-0 overflow-hidden"
              >
                <div className="h-full flex flex-col">
                  <SheetHeader className="p-8 pb-4 text-left border-b border-gray-50 bg-gray-50/50">
                    <SheetTitle className="text-2xl font-['Playfair_Display'] text-primary font-bold">
                      Menú
                    </SheetTitle>
                  </SheetHeader>

                  <nav className="flex flex-col p-6 grow">
                    <div className="flex flex-col gap-2 mb-8">
                      {navItems.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          className="flex items-center gap-4 py-4 px-4 rounded-xl text-gray-800 hover:bg-primary/5 transition-all group border border-transparent hover:border-primary/10"
                        >
                          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-50 group-hover:bg-primary/10 transition-colors shrink-0">
                            <item.icon
                              size={20}
                              className="text-gray-400 group-hover:text-primary transition-colors"
                            />
                          </div>
                          <span className="text-lg font-bold tracking-tight text-gray-900">
                            {item.label}
                          </span>
                          <ChevronRight className="ml-auto h-4 w-4 text-gray-300 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                        </a>
                      ))}
                    </div>
                  </nav>

                  <div className="p-8 bg-gray-50 border-t border-gray-100">
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest text-center">
                      Bufete Lcdo. Egozcue
                    </p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
