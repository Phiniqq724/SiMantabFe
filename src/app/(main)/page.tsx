import Image from "next/image";
import OrangBelanja from "@/../public/orang-belanja.png";
import Promo from "@/../public/promo.png";
import Button from "@/components/Buttons";

export default function Home() {
  return (
    <>
      {/* header */}
      <section className="bg-gradient-to-b h-screen from-gray-200 to-transparent flex ">
        <div className="w-full flex flex-col justify-center mx-12 gap-4">
          <h1 className="text-[60px] font-medium text-[#3E3E3E]">
            Temukan Belanjaan <br />{" "}
            <span className="text-sky-400">Terbaikmu</span> di Sini!
          </h1>
          <p className="max-w-[600px]">
            Temukan ribuan produk berkualitas dengan harga terbaik, nikmati
            pengalaman belanja online yang cepat, aman, dan menyenangkan, serta
            dapatkan penawaran terbaik hanya di SiMantab!
          </p>
          <Button
            variants="primary"
            size="sm"
            className="max-w-48"
            icon={<span>🛒</span>}
          >
            Mulai Belanja!
          </Button>
        </div>
        <Image src={OrangBelanja} alt="Orang" className="w-full h-auto" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="830"
          height="494"
          viewBox="0 0 830 494"
          fill="none"
          className="absolute bottom-0 right-0 -z-10"
        >
          <path
            d="M830 493.998V240.5V0C830 203.411 183.766 494 0 494C467.214 494 630.762 493.998 830 493.998Z"
            fill="#373DD2"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="492"
          height="560"
          viewBox="0 0 492 560"
          fill="none"
          className="absolute top-0 right-0 -z-10"
        >
          <path d="M492 0H240H0C203 0 492 424.5 492 560V0Z" fill="#66C7F4" />
        </svg>
      </section>
      {/* terlaris */}
      <section className="w-full h-screen flex flex-col items-center justify-center gap-4">
        <h1 className="text-[50px] font-bold text-[#3E3E3E] ">
          <span className="text-sky-400">Terlaris</span> di Toko Kami
        </h1>
        <p className="text-[18px]">
          Temukan produk terlaris kami yang selalu dicari, paling disukai, dan
          memberikan kepuasan maksimal untuk pengalaman belanja terbaik!
        </p>
        <div className="flex gap-[60px] mt-32">
          <div className="bg-white shadow-lg max-w-64 p-4 rounded-xl">
            <h1 className="text-xl font-medium">Rumah Tangga</h1>
            <p className="">
              Blender multifungsi, rice cooker pintar, dan vacuum cleaner modern
              untuk mempermudah pekerjaan rumah dan menjaga kenyamanan
              sehari-hari.
            </p>
          </div>
          <div className="bg-white shadow-lg max-w-64 p-4 rounded-xl">
            <h1 className="text-xl font-medium">Elektronik</h1>
            <p className="">
              Smartphone canggih, earphone premium, dan smart TV beresolusi
              tinggi yang bikin hiburan dan aktivitas sehari-hari lebih praktis.
            </p>
          </div>
          <div className="bg-white shadow-lg max-w-64 p-4 rounded-xl">
            <h1 className="text-xl font-medium">Skincare</h1>
            <p className="">
              Serum anti-aging, moisturizer melembapkan, dan sunscreen nyaman
              dipakai untuk kulit sehat, glowing, dan percaya diri.
            </p>
          </div>
        </div>
      </section>
      {/* Brand internasional */}
      <section className="w-full h-screen flex flex-col items-center justify-center bg-slate-200">
        <h1 className="text-[#3E3E3E] text-[50px] font-bold">
          Brand <span className="text-sky-400">International</span> Terpopuler
        </h1>
        <p className="text-center">
          Kami menjual brand International yang sudah terverifikasi,
          <br /> terpercaya dan dijamin keasliannya!
        </p>
      </section>
      {/* Promo */}
      <Image src={Promo} alt="promo" className="w-full h-auto" />
    </>
  );
}
