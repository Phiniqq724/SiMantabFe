"use client";

import React from "react";
import Image from "next/image";
import Logo from "../../public/Logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Links {
  title: string;
  href: string;
}

// Komponen Navbar untuk User
function UserNavbar() {
  const links: Links[] = [
    { title: "Keranjang", href: "/user/cart" },
    { title: "Profile", href: "/user/profile" },
  ];
  return (
    <nav className="w-full fixed bg-white h-20 flex justify-around items-center border-b border-gray-200">
      <div className="flex justify-around max-w-[1200px] w-full gap-[85px]">
        <Image src={Logo} alt="Icon" width={185} height={50} />
        <input
          type="text"
          placeholder="Search..."
          className="border rounded-lg w-full px-4 py-1"
        />
        <ul className="flex gap-4 items-center w-full">
          {links.map((link) => (
            <li key={link.title}>
              <Link href={link.href}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

// Komponen Navbar untuk Admin
function AdminNavbar() {
  return (
    <nav className="w-full fixed bg-red-600 h-20 flex justify-around items-center">
      <div className="text-white font-bold">Admin Dashboard</div>
      {/* Tambahkan konten navbar admin sesuai kebutuhan */}
    </nav>
  );
}

// Komponen Navbar Default
function DefaultNavbar() {
  const links: Links[] = [
    { title: "Beranda", href: "/" },
    { title: "Tentang Kami", href: "/" },
    { title: "Bantuan", href: "/" },
  ];

  return (
    <nav className="w-full fixed bg-white h-20 flex justify-around items-center">
      <div className="flex gap-[85px]">
        <Image src={Logo} alt="Icon" width={185} height={50} />
        <ul className="flex gap-4 items-center">
          {links.map((link) => (
            <li key={link.title}>
              <Link href={link.href}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-[24px] max-h-12 h-full">
        <Link
          href={"/auth?page=register"}
          className="bg-sky-400 rounded-lg px-4 text-white flex items-center justify-center border-2 border-sky-400"
        >
          Daftar
        </Link>
        <Link
          href={"/auth?page=login"}
          className="flex items-center justify-center border-2 border-sky-400 rounded-lg px-4 text-sky-400"
        >
          Masuk
        </Link>
      </div>
    </nav>
  );
}

export default function Navbar() {
  const pathname = usePathname();

  // Kondisi untuk menampilkan navbar yang sesuai
  if (pathname.startsWith("/user")) {
    return <UserNavbar />;
  }

  if (pathname.startsWith("/admin")) {
    return <AdminNavbar />;
  }

  // Default navbar untuk path "/"
  return <DefaultNavbar />;
}
