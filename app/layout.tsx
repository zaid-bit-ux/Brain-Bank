import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "StudyPilot — AI-Powered Learning",
  description:
    "Your personal AI learning companion for notes, practice, planning, and progress.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
