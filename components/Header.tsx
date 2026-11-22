"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { nav } from "@/lib/site";
import { cn } from "@/lib/cn";
import { Logo } from "./Logo";
import { Button } from "./ui/Button";
import { Menu, X } from "./ui/Icons";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");
  // At the top of the home page the header sits over the dark hero video, so it switches to light text.
  const overDark = pathname === "/" && !scrolled && !open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open ? "border-b border-line bg-white/90 backdrop-blur-md" : "bg-white/0",
      )}
    >
      <div className={cn("container flex items-center justify-between transition-all duration-300", scrolled ? "h-16" : "h-20")}>
        <Logo tone={overDark ? "dark" : "light"} />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative rounded-full px-4 py-2 text-[15px] font-medium transition-colors",
                overDark
                  ? "text-white/80 hover:text-white"
                  : isActive(item.href)
                    ? "text-navy"
                    : "text-slate hover:text-navy",
              )}
            >
              {item.label}
              {isActive(item.href) && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-gold"
                  transition={{ type: "spring", stiffness: 400, damping: 35 }}
                />
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact" size="sm" variant={overDark ? "white" : "primary"} arrow>
            Start a Project
          </Button>
        </div>

        <button
          type="button"
          className={cn("flex h-11 w-11 items-center justify-center rounded-full lg:hidden", overDark ? "text-white" : "text-navy")}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-x-0 top-full h-[calc(100vh-4rem)] overflow-y-auto border-t border-line bg-white lg:hidden"
          >
            <nav className="container flex flex-col py-6" aria-label="Mobile">
              {nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center justify-between border-b border-line py-4 text-2xl font-semibold",
                      isActive(item.href) ? "text-navy" : "text-ink",
                    )}
                  >
                    {item.label}
                    {isActive(item.href) && <span className="h-2 w-2 rounded-full bg-gold" />}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-8 flex flex-col gap-3">
                <Button href="/contact" size="lg" arrow>
                  Start a Project
                </Button>
                <Button href="/services" size="lg" variant="outline">
                  Explore services
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
