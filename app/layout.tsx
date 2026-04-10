import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Casper's Caviar – Premium Caviar",
  description: "Exceptional caviar, sourced with care and presented with intention.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="grain-overlay" />
        {children}
      </body>
    </html>
  );
}
