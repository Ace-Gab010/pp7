"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";

export default function Sports() {
  const buttonClass =
    "px-4 py-2 bg-white text-blue-900 rounded-xl font-bold shadow hover:scale-105 transition-transform duration-300";

  return (
    <div className="relative flex flex-col min-h-screen font-sans text-white overflow-hidden">

      {/* Fixed Header */}
      <header className="fixed top-0 left-0 w-full flex justify-center gap-4 p-4 z-30 bg-white/10 backdrop-blur-sm">
        <Link href="/"><button className={buttonClass}>Home</button></Link>
        <Link href="/about"><button className={buttonClass}>About</button></Link>
        <Link href="/certificates"><button className={buttonClass}>Certificates</button></Link>
        <Link href="/contact"><button className={buttonClass}>Contact</button></Link>
        <Link href="/education"><button className={buttonClass}>Education</button></Link>
        <Link href="/hobbies"><button className={buttonClass}>Hobbies</button></Link>
        <Link href="/sports"><button className={buttonClass}>Sports</button></Link>
      </header>

      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#3C5B7C] to-blue-900 z-0"></div>

      {/* Subtle Floating Blobs */}
      <motion.div
        className="absolute rounded-full bg-white/5 w-40 h-40 top-10 left-10 z-0"
        animate={{ y: [0, 15, 0], x: [0, 15, 0] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
      />
      <motion.div
        className="absolute rounded-full bg-blue-500/10 w-48 h-48 bottom-20 right-20 z-0"
        animate={{ y: [0, -15, 0], x: [0, -15, 0] }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "mirror" }}
      />

      {/* Content */}
      <main className="flex flex-col items-center justify-center mt-24 p-8 z-10">
        <motion.h1
          className="text-5xl font-bold mb-6 tracking-wide z-10"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          SPORTS
        </motion.h1>

        {/* Box 1: About Sport */}
        <motion.div
          className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl shadow-md max-w-xl text-center mb-6"
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-lg">
            I compete in <strong>Running and Track & Field</strong>.  
            I enjoy sprinting and endurance events, participating in school and local competitions.  
            Track and field helps me stay disciplined and focused.
          </p>
        </motion.div>

        {/* Box 2: Achievements */}
        <motion.div
          className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl shadow-md max-w-xl text-center mb-6"
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-lg">
            My goal is to improve my personal best times and compete in bigger events.  
            I have participated in local track meets and continue to train regularly.  
            Running develops perseverance and resilience.
          </p>
        </motion.div>

        {/* Box 3: Events & Personal Best */}
        <motion.div
          className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl shadow-md max-w-xl text-center"
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-lg">
            <strong>Events I compete in:</strong> 4x100m, 4x200m 4x400m relay. And 400m individual sprint.
            <strong>Personal Best:</strong> 100m - 16.5s | 200m - 28.8s
          </p>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="mt-10 mb-4 z-20 flex flex-col items-center text-white">
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
      <div className="absolute inset-0 bg-white/2 opacity-5 pointer-events-none z-0"></div>
    </div>
  );
}
