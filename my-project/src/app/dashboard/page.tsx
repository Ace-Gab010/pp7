"use client";

import { getToken } from "@/lib/auth";
import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface JwtPayload {
  sub: number;
  username: string;
  role: string;
  exp: number;
  iat: number;
}

export default function DashboardHome() {
  const [username, setUsername] = useState("Guest");
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const t = getToken();
    setToken(t);

    if (t) {
      try {
        const decoded = jwtDecode<JwtPayload>(t);
        if (decoded.username) {
          setUsername(decoded.username);
        }
      } catch (e) {
        console.error("Token decoding failed:", e);
      }
    }
  }, []);

  const cardClass =
    "flex flex-col items-center justify-center bg-white/20 backdrop-blur-md p-10 rounded-2xl shadow-2xl";

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

      {/* Main Dashboard Card */}
      <div className="flex flex-col items-center justify-center flex-grow z-20">
        <motion.div
          className={cardClass}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-black text-white mb-2 tracking-wide">Welcome, {username}</h1>
          {token && (
            <>
              <p className="text-white font-semibold mt-2 mb-1">Your Bearer Token:</p>
              <pre className="p-2 bg-slate-100 text-xs text-black rounded w-full break-all">{token}</pre>
            </>
          )}
        </motion.div>
      </div>

      {/* Overlay for subtle effect */}
      <div className="absolute inset-0 bg-white/5 opacity-10 pointer-events-none z-0"></div>
    </div>
  );
}
