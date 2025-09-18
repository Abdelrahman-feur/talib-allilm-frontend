import type { Metadata } from "next";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
import "./globals.css";
import Navigation from "@/components/navigation/navigation";
import Footer from "@/components/footer/footer";
import NProgressProvider from "@/components/NProgressProvider";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Talib Alillm",
  description:
    "An online learning platform for students, teachers, and educational institutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Suspense fallback={null}>
          <NProgressProvider />
        </Suspense>
        <Navigation />
        <main className=" container ">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
