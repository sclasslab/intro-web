"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useMemo } from "react";

type Locale = "en" | "ko";

function getLocaleFromPath(pathname: string): Locale {
  if (pathname.startsWith("/ko")) return "ko";
  return "en";
}

export default function NavBar() {
  const pathname = usePathname();
  const router = useRouter();
  const locale = useMemo(() => getLocaleFromPath(pathname || "/en"), [pathname]);

  const t = useMemo(() => {
    if (locale === "ko") {
      return {
        about: "소개",
        solutions: "솔루션",
        inception: "Inception",
        contact: "문의",
        cta: "상담 요청",
        brand: "sclasslab",
      };
    }
    return {
      about: "About",
      solutions: "Medical AI",
      inception: "NVIDIA Inception",
      contact: "Contact",
      cta: "Get in touch",
      brand: "sclasslab",
    };
  }, [locale]);

  const switchLang = (lang: Locale) => {
    if (!pathname) return;
    if (locale === lang) return;

    // /en/...  <->  /ko/...
    if (pathname.startsWith("/en")) {
      router.push(pathname.replace("/en", `/${lang}`));
    } else if (pathname.startsWith("/ko")) {
      router.push(pathname.replace("/ko", `/${lang}`));
    } else {
      // 루트에 있을 경우 기본 분기
      router.push(`/${lang}`);
    }
  };

  // 현재 경로가 /en, /ko 외 루트일 때를 대비해 section anchor는 그대로 유지
  const base = pathname?.startsWith("/ko") ? "/ko" : "/en";

  return (
    <header className="sticky top-0 z-30 bg-slate-50/80 backdrop-blur border-b border-slate-200">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Brand */}
        <Link href={base} className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-teal-400 to-cyan-500" />
          <span className="text-lg font-semibold tracking-tight">{t.brand}</span>
        </Link>

        {/* Center nav (desktop) */}
        <nav className="hidden gap-6 md:flex text-sm font-medium text-slate-600">
          <a href="#about" className="hover:text-slate-900">{t.about}</a>
          <a href="#solutions" className="hover:text-slate-900">{t.solutions}</a>
          <a href="#inception" className="hover:text-slate-900">{t.inception}</a>
          <a href="#contact" className="hover:text-slate-900">{t.contact}</a>
        </nav>

        {/* Right side: language + CTA */}
        <div className="flex items-center gap-2">
          <div className="flex items-center text-sm font-medium">
            <button
              onClick={() => switchLang("en")}
              className={`px-2 py-1 rounded-md hover:bg-slate-100 ${locale === "en" ? "text-slate-900" : "text-slate-500"}`}
              aria-pressed={locale === "en"}
            >
              EN
            </button>
            <span className="mx-1 text-slate-400">|</span>
            <button
              onClick={() => switchLang("ko")}
              className={`px-2 py-1 rounded-md hover:bg-slate-100 ${locale === "ko" ? "text-slate-900" : "text-slate-500"}`}
              aria-pressed={locale === "ko"}
            >
              KO
            </button>
          </div>
          <a
            href="#contact"
            className="ml-2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
          >
            {t.cta}
          </a>
        </div>
      </div>
    </header>
  );
}
