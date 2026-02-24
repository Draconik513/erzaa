import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import vidioWishes from "../assets/videos/Wishes.mp4";

const SpecialWishes = ({ isIOS }) => {
  const [showHeart, setShowHeart] = useState(false);

  const wishes = `
selamat ulang tahun ade sayangnya mas cantiknya mas dunia nya mass🤍💐🎁 semoga di umur ade yang sekarang ade bisa jadi diri ade yang lebih baik lagi dari sebelum nya ya, semoga ade selalu di kelilingi orang" baik, semoga ade bisa lebih bermanfaat lagi bagi banyak orang dan semoga ade selalu bisa jadi secantik cahaya bulan ya sayangg🌙✨

ade tau? ade itu adalah manusia yang bener" mas kagumi sayang.. mas selalu kagum sama sabarnya ade, mas selalu kagum dengan cara ade bangkit dan bertahan dari segala hal yang bikin ade patah, mas selalu kagum karna ade selalu mau berusaha nerima segala hal yang ade punya, dan mas selalu kagum karna ade selalu mau belajar dari segala kesalahan di masa lalu.. mas selalu terpesona sama cantik nya sabar ade.. cantiknya pengertian ade dan cantiknya ketulusan ade💘❗️jadi jangan pernah ngerasa buruk ya sayang.. ade selalu mengagumkan di mata mas💯

mas sangat berterima kasih sama tuhan karna di hidup mas yang cuma sekali ini mas pernah di pertemukan sama manusia secantik ade, dan mas juga mau bilang terimakasih sama ade.. makasih ya sayangg udah kasih kesempatan mas bisa mencintai dan di cintai ade dengan rasa se indah ini🤍

sekali lagi happy birthday my beautiful dream, my night guard, the soother of my soul, the lamp in my darkness, the crashing of my waves, my morning sun, my gentle breeze, the refreshing rain, the calming dusk, the dew on the leaves, the sun of life, the poetry in my heart, the eternal story, the harmony of my soul, the endless longing, my complement, my final destination, my life's inspiration, the melody of my tune, my warmest hug, the smile I long for, my little heaven, the guardian of my dreams, the light of my stars, my breath, the sigh of my longing, the beat of my heart, my most beautiful night, the hope in my life, the dawn of my salvation, my bright afternoon, my calm waves, my shield of my heart, my love ark, my night blanket, my morning embrace, my universe harmony, my heart's idol, the flower sower on my path, my love lantern, the morning star in my darkness, the oxygen in my breath, my ocean of love, my living soul, the aurora of my love, the inspiration of my longing, the solace of my fatigue my limitless happiness, and the eternal time in my life🤍
  `;

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-100 p-4 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl w-full"
      >
        <h1 className="text-4xl font-bold text-center text-pink-600 mb-8">
          Pesan Spesial Untukmu
        </h1>

        <div className="mb-8">
          <video
            autoPlay
            loop
            muted
            playsInline
            webkit-playsinline="true"
            x-webkit-airplay="allow"
            className="w-full max-w-md mx-auto rounded-lg shadow-xl"
          >
            <source src={vidioWishes} type="video/mp4" />
          </video>
        </div>

        <motion.div
          whileHover={{ scale: isIOS ? 1 : 1.01 }}
          className="bg-white bg-opacity-80 backdrop-blur-sm p-6 rounded-xl shadow-lg mb-8"
        >
          <div className="prose max-w-none">
            {wishes.split("\n").map((paragraph, i) => (
              <p key={i} className="text-pink-800 mb-4 text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>

        <div className="flex justify-center">
          <motion.button
            whileHover={{ scale: isIOS ? 1 : 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowHeart(!showHeart)}
            className="relative overflow-hidden bg-pink-500 text-white px-6 py-3 rounded-full shadow-lg"
          >
            <span className="button-text">
              {showHeart ? "Sembunyikan Cintaku" : "Lihat Cintaku"}
            </span>
          </motion.button>
        </div>

        <AnimatePresence>
          {showHeart && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
            >
              <motion.div
                className="relative text-pink-500"
                animate={{ scale: [1, 1.1, 1], opacity: [0.9, 1, 0.9] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="text-[12rem] select-none text-center">❤️</div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl font-bold drop-shadow-lg">
                  ineu 💖
                </div>
                <div className="text-white text-lg text-center mt-4">
                  My Heart Belongs to you, Honey🥹
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default SpecialWishes;
