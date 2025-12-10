"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";

export default function Contact() {
  const buttonClass =
    "px-4 py-2 bg-white text-blue-900 rounded-xl font-bold shadow hover:scale-105 transition-transform duration-300";

  return (
    <div className="relative flex flex-col min-h-screen font-sans text-white overflow-hidden">
      
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 w-full flex justify-center gap-4 p-4 z-30 bg-white/10 backdrop-blur-md">
        <Link href="/"><button className={buttonClass}>Home</button></Link>
        <Link href="/about"><button className={buttonClass}>About</button></Link>
        <Link href="/certificates"><button className={buttonClass}>Certificates</button></Link>
        <Link href="/contact"><button className={buttonClass}>Contact</button></Link>
        <Link href="/education"><button className={buttonClass}>Education</button></Link>
        <Link href="/hobbies"><button className={buttonClass}>Hobbies</button></Link>
        <Link href="/sports"><button className={buttonClass}>Sports</button></Link>
      </header>

      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#3C5B7C] to-blue-900 animate-gradient bg-[length:400%_400%] z-0"></div>

      {/* Floating Blobs */}
      <motion.div
        className="absolute rounded-full bg-white/10 w-40 h-40 top-10 left-10 z-0"
        animate={{ y: [0, 20, 0], x: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
      />
      <motion.div
        className="absolute rounded-full bg-blue-500/20 w-48 h-48 bottom-20 right-20 z-0"
        animate={{ y: [0, -20, 0], x: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "mirror" }}
      />

      {/* Content */}
      <main className="flex flex-col items-center justify-center mt-24 p-8 gap-6 w-full max-w-xl mx-auto">
        
        {/* Title */}
        <motion.h1
          className="text-5xl font-bold mb-6 tracking-wide z-10 text-center"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          CONTACT ME
        </motion.h1>

        {/* Contact Info Box */}
        <motion.div
          className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-xl text-center z-10 w-full"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-lg mb-4">
            📧 Email: acegabrielamparado@gmail.com
          </p>
          <p className="text-lg mb-4">
            📱 Phone: +63 947 350 0020
          </p>
          <p className="text-lg">
            📍 Location:Sanroque(Pob.) ,Bula, Camarines Sur, Philippines
          </p>
        </motion.div>

        {/* Contact Form Box */}
        <motion.div
          className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-xl text-center z-10 w-full"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-xl text-black"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-xl text-black"
            />
            <textarea
              placeholder="Your Message"
              className="p-3 rounded-xl text-black"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-yellow-300 text-blue-900 rounded-xl font-bold shadow hover:scale-105 transition-transform duration-300"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </main>
      {/* FOOTER */}
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
      <div className="absolute inset-0 bg-white/5 opacity-10 pointer-events-none z-0"></div>
    </div>
  );
}

