import "./globals.css";
import type { Metadata } from "next";
import NavBar from "./components/NavBar";

export const metadata: Metadata = {
  title: "sclasslab — Medical AI",
  description: "AI-driven medical diagnostics by sclasslab",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en"> {/* 기본값: en, 각 locale page에서 섹션 텍스트는 따로 관리 */}
      <body className="min-h-screen bg-slate-50 text-slate-900">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
