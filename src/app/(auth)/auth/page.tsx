"use client";

import Image from "next/image";
import Logo from "@/../public/Logo.png";
import Store_HP from "@/../public/phone.png";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Register from "./component/register";
import LoginForm from "./component/login";
import RegisterLoginButton from "./component/register_login_button";
import Link from "next/link";

export default function AuthLayout() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedForm, setSelectedForm] = useState("Register");

  useEffect(() => {
    const page = searchParams.get("page");
    if (page === "login") {
      setSelectedForm("Masuk");
    } else {
      setSelectedForm("Register");
    }
  }, [searchParams]);

  const handleButtonClick = (button: string) => {
    setSelectedForm(button);
    router.push(`/auth?page=${button === "Register" ? "register" : "login"}`);
  };

  return (
    <main className="bg-biru">
      <div className="min-h-screen">
        <div className="flex">
          <div className="w-1/2 flex flex-col">
            <header className="">
              <div className="flex items-start justify-start">
                <Link href="/">
                  <Image src={Logo} alt="Icon" width={185} height={80} />
                </Link>
              </div>
            </header>
            <div className="flex p-0 flex-col items-center space-y-8">
              <Image
                src={Store_HP}
                alt="Icon"
                width={787}
                height={643}
                priority
                className="object-contain"
              />
              <h1 className="text-4xl font-semibold text-black">
                Selamat Datang Kembali
              </h1>
              <p className="text-black text-center font-extralight max-w-md mx-auto leading-tight">
                Kami senang bisa menyambut Anda lagi. SiMantab memberikan
                pengalaman belanja online terbaik dengan pilihan produk yang
                lengkap dan fitur-fitur yang memudahkan. Mari mulai berbelanja
                dan nikmati kemudahannya bersama kami!
              </p>
            </div>
          </div>
          <div className="w-1/2 p-4 pr-0 pl-16">
            <div className="bg-white rounded-xl shadow-md w-11/12 h-[56rem] mx-auto overflow-auto">
              <div className="pr-14 pt-0 mb-7">
                <RegisterLoginButton
                  selectedButton={selectedForm}
                  onButtonClick={handleButtonClick}
                />
              </div>
              <div className="p-8">
                {selectedForm === "Register" ? (
                  <div>
                    <Register />
                  </div>
                ) : (
                  <div>
                    <LoginForm />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
