// src/app/layout.tsx
import type { Metadata } from "next";
import "@/styles/globals.css";
import ClientProviders from "./ClientProviders";
import { Roboto } from "next/font/google";

export const metadata: Metadata = {
  title: "Employee Management System",
  description: "Employee Management System",
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
