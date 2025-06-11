import React, { useState, useEffect } from "react";
import Image from "next/image";
import profile_icon from "@/../public/profile.svg";
import password_icon from "@/../public/Lock.svg";
import close_arrow from "@/../public/arrow_auth.svg";
import Link from "next/link";

const LoginForm: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [valid, setValid] = useState({
        email: false,
        password: false
    });

    useEffect(() => {
        setValid({
            email: email.includes("@"),
            password: password.length != 0
        });
    }, [email, password]);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (valid.email && valid.password) {
            console.log("Email:", email);
            console.log("Password:", password);
        } else {
            console.log("Invalid input");
        }
    };

    return (
        <>
            <div className="flex items-center mb-10">
                <div className="ml-56 mr-14">
                    <Link href="/">
                        <Image
                            src={close_arrow}
                            alt="Close Arrow"
                            className="cursor-pointer"
                        />
                    </Link>
                </div>
                <h2 className="text-5xl font-bold items-center">Masuk</h2>
            </div>
            <form onSubmit={handleSubmit} className="w-96 mx-auto">
                <span className="font-light">Email</span>
                <div className="mb-6 relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <Image src={profile_icon} alt="Email Icon" width={25} height={25} />
                    </div>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Masukan Email Anda"
                        required
                        className={`appearance-none border rounded-lg font-extralight w-full py-3 pl-12 pr-3 text-gray-700 text-base leading-tight focus:outline-none focus:shadow-outline ${
                            valid.email ? "border-green-500" : "border-red-500"
                        }`}
                    />
                </div>
                <span className="font-light">Password</span>
                <div className="relative mb-4">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <Image
                            src={password_icon}
                            alt="Password Icon"
                            width={25}
                            height={25}
                        />
                    </div>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Masukan Password Anda"
                        required
                        className={`appearance-none border rounded-lg font-extralight w-full py-3 pl-12 pr-3 text-gray-700 text-base leading-tight focus:outline-none focus:shadow-outline ${
                            valid.password ? "border-green-500" : "border-red-500"
                        }`}
                    />
                </div>
                <div className="mb-8 justify-end flex items-center">
                    <a className="ml-3 font-thin text-blue-300 text-sm py-0 text-end">
                        Lupa Password?
                    </a>
                </div>
                <div className="mb-16">
                    <label className="inline-flex items-start flex-col">
                        <div className="flex items-center space-x-2">
                            <input type="checkbox" className="form-checkbox h-4 w-4" />
                            <span className="text-gray-400 font-extralight text-sm">
                                Saya telah menyetujui
                            </span>
                        </div>
                        <a className="text-blue-400 leading-4 font-extralight text-sm ml-6">
                            syarat dan ketentuan privasi
                        </a>
                    </label>
                </div>
                <div className="flex items-center justify-center">
                    <button
                        type="submit"
                        className="bg-gradient-to-r from-[#D4F2FF] to-[#0293D7] text-white font-normal py-3 px-16 rounded-xl focus:outline-none focus:shadow-outline text-lg w-full"
                    >
                        LOGIN
                    </button>
                </div>
            </form>
        </>
    );
};

export default LoginForm;
