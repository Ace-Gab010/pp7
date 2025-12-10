"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { useState } from "react";

export default function Hobbies() {
  const buttonClass =
    "px-4 py-2 bg-white text-blue-900 rounded-xl font-bold shadow hover:scale-105 transition-transform duration-300";

  const hobbies = [
    {
      title: "Running",
      description: "I love running to stay active, energized, and focused.",
    },
    {
      title: "Playing Online Games",
      description: "Gaming is my way to relax, have fun, and challenge myself.",
    },
    {
      title: "Watching Anime",
      description: "Anime inspires me with great stories, art, and emotions.",
    },
  ];

  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % hobbies.length);
  const prev = () => setIndex((index - 1 + hobbies.length) % hobbies.length);

  return (
    <div className="relative flex flex-col min-h-screen font-sans text-white overflow-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full flex justify-center gap-4 p-4 z-30 bg-white/10 backdrop-blur-md">
        <Link href="/"><button className={buttonClass}>Home</button></Link>
        <Link href="/about"><button className={buttonClass}>About</button></Link>
        <Link href="/certificates"><button className={buttonClass}>Certificates</button></Link>
        <Link href="/contact"><button className={buttonClass}>Contact</button></Link>
        <Link href="/education"><button className={buttonClass}>Education</button></Link>
        <Link href="/hobbies"><button className={buttonClass}>Hobbies</button></Link>
        <Link href="/sports"><button className={buttonClass}>Sports</button></Link>
      </header>

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#3C5B7C] to-blue-900 animate-gradient bg-[length:400%_400%] z-0"></div>

      {/* Page Title */}
      <motion.h1
        className="text-5xl font-bold tracking-wide text-center mt-32 z-10"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        MY HOBBIES
      </motion.h1>

      {/* Carousel */}
      <div className="flex flex-col items-center justify-center mt-10 z-10">
        <div className="relative w-full max-w-xl bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl text-center">
          <motion.h2
            key={hobbies[index].title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-4"
          >
            {hobbies[index].title}
          </motion.h2>

          <motion.p
            key={hobbies[index].description}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-lg"
          >
            {hobbies[index].description}
          </motion.p>

          {/* Controls */}
          <div className="flex justify-between mt-6">
            <button
              onClick={prev}
              className="px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition"
            >
              ◀
            </button>
            <button
              onClick={next}
              className="px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition"
            >
              ▶
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 mb-4 z-20 flex flex-col items-center text-white">
        <p className="text-lg font-semibold mb-3">Contact me</p>

        <div className="flex gap-6 text-3xl">
          <Link href="https://web.facebook.com/ace.gabriel.amparado.2025" target="_blank" className="hover:scale-125 transition-transform">
            <FaFacebook />
          </Link>
          <Link href="https://github.com/Ace-Gab010" target="_blank" className="hover:scale-125 transition-transform">
            <FaGithub />
          </Link>
          <Link href="https://www.instagram.com/acegabrielamparado/" target="_blank" className="hover:scale-125 transition-transform">
            <FaInstagram />
          </Link>
        </div>

        <p className="text-sm opacity-60 mt-4">
          © {new Date().getFullYear()} Ace Amparado · All Rights Reserved
        </p>
      </footer>
    </div>
  );
}
