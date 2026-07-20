import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "StudyDesk | DA & CSE Study Portal",
  description: "A focused two-person DA and CSE study tracker.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
