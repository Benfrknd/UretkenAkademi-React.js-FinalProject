import React from 'react';

const App = () => {
  return (
    <div className="flex relative">
      {/* Sol Tarafta Boş Bölge */}
      <div className="flex-1 relative">
        {/* Sol tarafta içerik eklenebilir */}
        <img
          src="https://www.meram.bel.tr/assets/img/iletisimbg.png"
          alt=""
          className="w-full h-full object-cover absolute inset-0"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          {/* İçeriği buraya ekleyebilirsiniz */}
          <p className="text-white text-center">İçerik Buraya Gelecek</p>
        </div>
      </div>

      {/* Sağ Tarafta İletişim Bilgileri */}
      <div class="max-w-md mx-auto bg-white rounded overflow-hidden shadow-md">
        <div class="p-8 bg-blue-500 text-black">
          <h1 class="text-2xl font-bold mb-4 text-color-green">Meram Belediyesi Hizmet Binası</h1>
          <p>Adres: Yenişehir Mah. Azerbaycan Cad. No: 5 42010 Meram / KONYA</p>
          <p>Email: info@example.com</p>
          <p>Telefon:0332 320 10 00</p>
          <p>Kep Adresi: merambelediyesi@hs01.kep.tr </p>
          <p>E Tebligat: 35846-96487-38597</p>
          <p>IBAN: TR33 0001 2009 5240 0007 0000 02</p>        
          </div>
        <div class="p-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3150.172036012617!2d32.46931457583929!3d37.85626487196498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d08447295b2425%3A0xc7b0efc54a5c8e16!2sHac%C4%B1%20%C4%B0sa%20Efendi%2C%20Azerbeycan%20Cd.%20No%3A5%2C%2042010%20Meram%2FKonya!5e0!3m2!1str!2str!4v1706453689235!5m2!1str!2str"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            class="w-full h-48"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default App;
