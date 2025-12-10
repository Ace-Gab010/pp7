"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";

export default function Home() {
  const buttonClass =
    "px-4 py-2 bg-white text-blue-900 rounded-xl font-bold shadow hover:scale-105 transition-transform duration-300";

  return (
    <div className="relative flex flex-col min-h-screen font-sans text-white overflow-hidden">
      
      {/* Fixed Header with Navigation Buttons */}
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
      <main className="flex flex-col items-center justify-center mt-24 p-8">
        
        {/* Title */}
        <motion.h1
          className="text-5xl font-bold mb-6 tracking-wide z-10"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          ELEMENTARY
        </motion.h1>

        {/* Box 1 */}
        <motion.div
          className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-xl max-w-xl text-center mb-6 z-10"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-lg">
            BULA CENTRAL SCHOOL. This is where I spent my elementary years
            and created unforgettable memories this is where I learned the basics of education 
            and made lifelong friends along the way. Back in my elementary days, I do not have many achievements
            but I always tried my best in everything I do and made the most out of my time ther 
            just a simple student enjoying the simple joys of childhood and learning bout the world around me.
          </p>
        </motion.div>

        {/* ========================================= */}
        {/* HIGH SCHOOL */}
        {/* ========================================= */}
        <motion.h1
          className="text-5xl font-bold mb-6 tracking-wide z-10"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          HIGH SCHOOL
        </motion.h1>

        <motion.div
          className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-xl max-w-xl text-center mb-6 z-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="text-lg">
            BULA NATIONAL HIGHSCHOOL. This is the peak of most studenents life
            where we experience more challenges and opportunities for growth. 
            During my high school years, I focused on my studies and extracurricular activities to develop my skills and interests. 
            I participated in various school events, which helped me build confidence and teamwork skills.
            And this is also where I had some of my most memorable experiences, this is also where the late bloomers bloom their fullest.
            and this is where I truly discovered my passions and aspirations.
            In tis time this alos where the pundemic happened but still we managed to push through it all and it is alos the 
            hardest time for us students. 
            Include your school, achievements, or unforgettable moments.
          </p>
        </motion.div>

        <motion.div
          className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-xl max-w-xl text-center mb-10 z-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-lg">
            SENIOR HIGH SCHOOL: This is where I spent my senior high school years still in the same school
            BULA NATIONAL HIGHSCHOOL. 
            During my senior high school years, I chose a strand that aligned with my interests and career goals which is HUMSS. 
            I took on more responsibilities and challenges, which helped me develop a stronger work ethic and time management skills.
            This is also where I prepared myself for college and the future ahead, but something whent wrong the strand i choose is not allined in my futes course.
            In this time I am starting to get some achievementand also made new friends and created lasting memories with my classmates.
          </p>
        </motion.div>

        {/* ========================================= */}
        {/* COLLEGE */}
        {/* ========================================= */}
        <motion.h1
          className="text-5xl font-bold mb-6 tracking-wide z-10"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          COLLEGE
        </motion.h1>

        <motion.div
          className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-xl max-w-xl text-center mb-6 z-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="text-lg">
            NAGA COLLEGE FOUNDATION. This is where I am currently pursuing my higher education with the course of BSIT and expanding my knowledge and skills. 
            As a college student, I am taking on more challenging coursework and engaging in various extracurricular activities to enhance my learning experience.
            Now in my college life I am now little by little understanding what is life about and what I really want to become in the future.
          </p>
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

