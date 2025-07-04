import type { Metadata } from "next";
import { Geologica } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fonts = Geologica({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className={`${fonts.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
}
