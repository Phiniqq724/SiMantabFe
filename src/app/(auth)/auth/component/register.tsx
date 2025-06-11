import { useState, ChangeEvent, FormEvent, FocusEvent } from "react";
import Image from "next/image";
import profile_icon from "@/../public/profile.svg";
import phone_icon from "@/../public/Vector.svg";
import email_icon from "@/../public/sms.svg";
import password_icon from "@/../public/Lock.svg";
import provinsi_icon from "@/../public/map.svg";
import alamat_icon from "@/../public/Location.svg";
import gps_icon from "@/../public/gps.svg";
import close_arrow from "@/../public/arrow_auth.svg";
import Link from "next/link";

export default function Register() {
  const [formData, setFormData] = useState({
    namaLengkap: "",
    email: "",
    nomorTelepon: "",
    password: "",
    provinsi: "",
    alamatLengkap: "",
    detailLainnya: "",
    syarat: false,
  });

  const [valid, setValid] = useState({
    namaLengkap: false,
    email: false,
    nomorTelepon: false,
    password: false,
    provinsi: false,
    alamatLengkap: false,
    detailLainnya: false,
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, type, checked, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValid((prev) => ({
      ...prev,
      [name]: name === "email" ? validateEmail(value) : value.trim() !== "",
    }));
  };

  const validateEmail = (email: string) => {
    return email.includes("@");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <div className="flex items-center mb-10">
        <div className="ml-52 mr-14">
          <Link href="/">
            <Image
              src={close_arrow}
              alt="Close Arrow"
              className="cursor-pointer"
            />
          </Link>
        </div>
        <h2 className="text-5xl font-bold items-center">Register</h2>
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-[40rem] mx-auto font-extralight"
      >
        <div className="flex gap-6">
          <div className="mb-6 relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <Image
                src={profile_icon}
                alt="Nama Lengkap Icon"
                width={25}
                height={25}
              />
            </div>
            <input
              type="text"
              id="namaLengkap"
              name="namaLengkap"
              placeholder="Nama Lengkap"
              value={formData.namaLengkap}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              className={`appearance-none border rounded w-full py-3 pl-12 pr-3 text-gray-700 text-base leading-tight focus:outline-none focus:shadow-outline ${
                valid.namaLengkap
                  ? "border-green-500"
                  : "invalid:border-pink-500 focus:border-blue-500"
              }`}
            />
          </div>
          <div className="mb-6 relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <Image
                src={phone_icon}
                alt="Nomor Telepon Icon"
                width={25}
                height={25}
              />
            </div>
            <input
              type="number"
              id="nomorTelepon"
              name="nomorTelepon"
              placeholder="Nomor Telepon"
              value={formData.nomorTelepon}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              className={`appearance-none border rounded-lg w-full py-3 pl-12 pr-3 text-gray-700 text-base leading-tight focus:outline-none focus:shadow-outline ${
                valid.nomorTelepon
                  ? "border-green-500"
                  : "invalid:border-pink-500 focus:border-blue-500"
              }`}
            />
          </div>
        </div>
        <div className="flex gap-6">
          <div className="mb-6 relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <Image src={email_icon} alt="Email Icon" width={25} height={25} />
            </div>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              className={`appearance-none border rounded-lg w-full py-3 pl-12 pr-3 text-gray-700 text-base leading-tight focus:outline-none focus:shadow-outline ${
                valid.email
                  ? "border-green-500"
                  : "invalid:border-pink-500 focus:border-blue-500"
              }`}
            />
          </div>

          <div className="mb-6 relative w-full">
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
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              className={`appearance-none border rounded-lg w-full py-3 pl-12 pr-3 text-gray-700 text-base leading-tight focus:outline-none focus:shadow-outline ${
                valid.password
                  ? "border-green-500"
                  : "invalid:border-pink-500 focus:border-blue-500"
              }`}
            />
          </div>
        </div>
        <div className="mb-5 relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <Image
              src={provinsi_icon}
              alt="Provinsi Icon"
              width={25}
              height={25}
            />
          </div>
          <input
            type="text"
            id="provinsi"
            name="provinsi"
            placeholder="Provinsi, Kota, Kecamatan, Kode Pos"
            value={formData.provinsi}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            className={`appearance-none border rounded-lg w-full py-3 pl-12 pr-3 text-gray-700 text-base leading-tight focus:outline-none focus:shadow-outline ${
              valid.provinsi
                ? "border-green-500"
                : "invalid:border-pink-500 focus:border-blue-500"
            }`}
          />
        </div>
        <div className=" mb-5 relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <Image src={alamat_icon} alt="Alamat Icon" width={25} height={25} />
          </div>
          <input
            type="text"
            id="alamatLengkap"
            name="alamatLengkap"
            placeholder="Alamat Lengkap (Nama Jalan, No. Rumah, Gedung)"
            value={formData.alamatLengkap}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            className={`appearance-none border rounded-lg w-full py-5 pl-12 pr-3 text-gray-700 text-base leading-tight focus:outline-none focus:shadow-outline ${
              valid.alamatLengkap
                ? "border-green-500"
                : "invalid:border-pink-500 focus:border-blue-500"
            }`}
          />
        </div>
        <div className="mb-14 relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <Image src={gps_icon} alt="GPS Icon" width={25} height={25} />
          </div>
          <input
            type="text"
            id="detailLainnya"
            name="detailLainnya"
            placeholder="Masukkan Detail Lainnya (Optional)"
            value={formData.detailLainnya}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`appearance-none border rounded-lg w-full py-3 pl-12 pr-3 text-gray-700 text-base leading-tight focus:outline-none focus:shadow-outline ${
              valid.detailLainnya
                ? "border-green-500"
                : "invalid:border-grey-500 focus:border-blue-500"
            }`}
          />
        </div>
        <div className="mb-16">
          <label className="inline-flex items-start flex-col">
            <span className="text-gray-400 ml-6 font-extralight text-sm">
              Saya telah menyetujui
            </span>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="syarat"
                id="syarat"
                checked={formData.syarat}
                onChange={handleChange}
                className="form-checkbox h-4 w-4 rounded border-gray-300 focus:ring-blue-500"
              />
              <a
                href="#"
                className="text-blue-300 leading-3 font-extralight text-sm hover:text-blue-600"
              >
                syarat dan ketentuan privasi
              </a>
            </div>
          </label>
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-gradient-to-r font-bold from-[#D4F2FF] to-[#0293D7] text-white py-3 px-16 rounded-xl focus:outline-none focus:shadow-outline text-lg max-w-[24rem] w-full"
          >
            BUAT
          </button>
        </div>
      </form>
    </>
  );
}
