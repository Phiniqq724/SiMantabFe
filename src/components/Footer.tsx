import React from 'react';

export default function Footer() {
  return (
    <>
        <footer className="bg-blue-900 text-white py-10">
  <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
    <div>
      <h2 className="text-lg font-bold mb-4">SiMantab</h2>
      <p className="text-sm mb-4">
        Sebagai tempat Belanja Online di Asia, kami menciptakan kemungkinan-kemungkinan gaya tanpa batas dengan cara memperluas jangkauan produk, mulai dari produk internasional hingga produk lokal dambaan. Kami menjadikan Anda sebagai pusatnya. <strong>Bersama SiMantab, You Own Now.</strong>
      </p>
      <p className="text-sm">
        Layanan Pengaduan Konsumen SiMantab<br />
        E-mail: <a href="mailto:customer@id.simantab.com" className="underline">customer@id.simantab.com</a>
      </p>
    </div>
    <div>
      <h3 className="text-lg font-bold mb-4">Temukan Kami</h3>
      <div className="flex space-x-4">
        <a href="#" aria-label="Facebook" className="text-2xl hover:text-blue-500">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="#" aria-label="Instagram" className="text-2xl hover:text-pink-500">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" aria-label="Twitter" className="text-2xl hover:text-blue-400">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" aria-label="LinkedIn" className="text-2xl hover:text-blue-700">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </div>
    <div>
      <h3 className="text-lg font-bold mb-4">Layanan</h3>
      <ul className="space-y-2 text-sm">
        <li><a href="#" className="hover:underline">Bantuan</a></li>
        <li><a href="#" className="hover:underline">Cara Pengembalian</a></li>
        <li><a href="#" className="hover:underline">Product Index</a></li>
        <li><a href="#" className="hover:underline">Promo Partner Kami</a></li>
        <li><a href="#" className="hover:underline">Konfirmasi Transfer</a></li>
        <li><a href="#" className="hover:underline">Hubungi Kami</a></li>
        <li><a href="#" className="hover:underline">Cara Berjualan</a></li>
        <li><a href="#" className="hover:underline">Pengembalian Ongkir</a></li>
        <li><a href="#" className="hover:underline">Status Order</a></li>
        <li><a href="#" className="hover:underline">Brand di Zalora</a></li>
      </ul>
    </div>
    <div>
      <h3 className="text-lg font-bold mb-4">Tentang Kami</h3>
      <ul className="space-y-2 text-sm">
        <li><a href="#" className="hover:underline">About Us</a></li>
        <li><a href="#" className="hover:underline">Promosikan Brand Anda</a></li>
        <li><a href="#" className="hover:underline">Pers/Media Karir</a></li>
        <li><a href="#" className="hover:underline">Persyaratan & Ketentuan</a></li>
        <li><a href="#" className="hover:underline">Kebijakan Privasi</a></li>
        <li><a href="#" className="hover:underline">Responsible Disclosure</a></li>
        <li><a href="#" className="hover:underline">Konfirmasi Transfer</a></li>
        <li><a href="#" className="hover:underline">Influencer Program</a></li>
      </ul>
    </div>
  </div>
  <div className="mt-10 border-t border-blue-700 pt-6 text-sm text-center">
    <p>Keamanan & Privasi</p>
    <p className="flex items-center justify-center space-x-2">
      <i className="fas fa-phone-alt"></i>
      <span>(0341) 5678-1234</span>
    </p>
    <p className="mt-4">Version 7.6.1.08 (Indonesian) | Copyright &copy; SiMantab 2025</p>
  </div>
</footer>

    </>
  );
}
