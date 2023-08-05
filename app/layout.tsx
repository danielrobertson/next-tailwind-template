import classnames from "classnames";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Todo ☑️",
  description: "You know what this is",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const classes = classnames("text-gray-900", inter.className);
  return (
    <html lang="en">
      <body className={classes}>{children}</body>
    </html>
  );
}
