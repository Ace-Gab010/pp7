"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";

export default function Home() {
  const buttonClass =
    "px-6 py-3 w-48 text-lg bg-white text-blue-900 rounded-xl font-bold shadow-2xl hover:bg-grey-100 hover:scale-[1.03] transition-transform duration-300";

  return (
    <div className="relative flex flex-col min-h-screen font-sans p-8 overflow-hidden">

      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#3C5B7C] to-blue-900 animate-gradient bg-[length:400%_400%] z-0"></div>

      {/* Floating Background Blobs */}
      <motion.div
        className="absolute rounded-full bg-white/10 w-48 h-48 top-1/3 left-10 z-0"
        animate={{ y: [0, 20, 0], x: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
      />
      <motion.div
        className="absolute rounded-full bg-blue-500/20 w-60 h-60 bottom-1/4 right-10 z-0"
        animate={{ y: [0, -25, 0], x: [0, -25, 0] }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "mirror" }}
      />

      {/* Floating Sparkles */}
      <motion.div
        className="absolute w-2 h-2 rounded-full bg-white/30 top-20 left-1/4 z-0"
        animate={{ x: [0, 30, 0], y: [0, 30, 0] }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "mirror" }}
      />
      <motion.div
        className="absolute w-2 h-2 rounded-full bg-white/30 top-1/2 right-1/3 z-0"
        animate={{ x: [0, -25, 0], y: [0, 20, 0] }}
        transition={{ duration: 7, repeat: Infinity, repeatType: "mirror" }}
      />

      {/* Top Images */}
      <div className="absolute top-4 left-4 z-10">
        <Image src="/CS1.png" alt="Left" width={170} height={170} />
      </div>

      <div className="absolute top-4 right-4 z-10">
        <Image src="/Naga-College-Foundation.png" alt="Right" width={170} height={170} />
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center flex-grow z-20">
        <motion.div
          className="flex flex-col items-center justify-center bg-white/20 backdrop-blur-md p-10 rounded-2xl shadow-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-7xl font-black text-white mb-2 tracking-wide">ACE AMPARADO</h1>
          <p className="text-2xl text-white font-medium mb-10">STUDENT</p>

          {/* Buttons */}
          <div className="grid grid-cols-3 gap-6">
            <Link href="/about"><button className={buttonClass}>About</button></Link>
            <Link href="/certificates"><button className={buttonClass}>Certificates</button></Link>
            <Link href="/contact"><button className={buttonClass}>Contact</button></Link>
            <Link href="/education"><button className={buttonClass}>Education</button></Link>
            <Link href="/hobbies"><button className={buttonClass}>Hobbies</button></Link>
            <Link href="/sports"><button className={buttonClass}>Sports</button></Link>
          </div>
        </motion.div>
      </div>

      {/* FOOTER */}
      <footer className="mt-10 mb-4 z-20 flex flex-col items-center text-white">

        {/* Login button placed above contact area (lower center) */}
        <div className="mb-4">
          <Link href="/login">
              <button className="px-6 py-3 bg-white text-blue-900 rounded-lg font-bold shadow-lg hover:bg-slate-50 hover:scale-105 transition-transform duration-300">
              Login
            </button>
          </Link>
        </div>

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

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/5 opacity-10 pointer-events-none z-0"></div>
    </div>
  );
}
