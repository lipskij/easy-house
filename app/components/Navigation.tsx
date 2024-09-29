"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Navigation: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style jsx global>{`
        @keyframes glitch-anim-1 {
          0% {
            clip: rect(30px, 9999px, 10px, 0);
          }
          10% {
            clip: rect(10px, 9999px, 90px, 0);
          }
          20% {
            clip: rect(70px, 9999px, 20px, 0);
          }
          30% {
            clip: rect(50px, 9999px, 30px, 0);
          }
          40% {
            clip: rect(20px, 9999px, 60px, 0);
          }
          50% {
            clip: rect(80px, 9999px, 10px, 0);
          }
          60% {
            clip: rect(10px, 9999px, 70px, 0);
          }
          70% {
            clip: rect(40px, 9999px, 30px, 0);
          }
          80% {
            clip: rect(60px, 9999px, 50px, 0);
          }
          90% {
            clip: rect(30px, 9999px, 20px, 0);
          }
          100% {
            clip: rect(70px, 9999px, 40px, 0);
          }
        }
        @keyframes glitch-anim-2 {
          0% {
            clip: rect(60px, 9999px, 50px, 0);
          }
          10% {
            clip: rect(30px, 9999px, 20px, 0);
          }
          20% {
            clip: rect(10px, 9999px, 70px, 0);
          }
          30% {
            clip: rect(40px, 9999px, 30px, 0);
          }
          40% {
            clip: rect(80px, 9999px, 10px, 0);
          }
          50% {
            clip: rect(50px, 9999px, 60px, 0);
          }
          60% {
            clip: rect(20px, 9999px, 90px, 0);
          }
          70% {
            clip: rect(70px, 9999px, 20px, 0);
          }
          80% {
            clip: rect(10px, 9999px, 50px, 0);
          }
          90% {
            clip: rect(30px, 9999px, 40px, 0);
          }
          100% {
            clip: rect(50px, 9999px, 80px, 0);
          }
        }
        .nav-link {
          position: relative;
        }
        .nav-link:hover::before,
        .nav-link:hover::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: transparent;
        }
        .nav-link:hover::before {
          left: 2px;
          text-shadow: -2px 0 #ff00c1;
          clip: rect(44px, 450px, 56px, 0);
          animation: glitch-anim-1 0.5s infinite linear alternate-reverse;
        }
        .nav-link:hover::after {
          left: -2px;
          text-shadow: -2px 0 #00fff9, 2px 2px #ff00c1;
          animation: glitch-anim-2 0.3s infinite linear alternate-reverse;
        }

        @media (max-width: 768px) {
          .nav-link:hover::before,
          .nav-link:hover::after {
            animation: none;
          }
        }

        .mobile-menu {
          transition: transform 0.3s ease-in-out;
          transform: translateY(-100%);
        }

        .mobile-menu.open {
          transform: translateY(0);
        }
      `}</style>
      <nav
        className={`font-nav w-full fixed top-0 left-0 z-50 transition-opacity duration-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="w-full px-4">
          <div className="flex items-center justify-between h-32 relative">
            <div className="absolute left-4">
              <Image src="/logo2.svg" alt="Logo" width={150} height={150} />
            </div>
            <div className="hidden md:flex justify-center space-x-8 w-full">
              {[
                "Home",
                "Creative Production",
                "Art Tech",
                "Media",
                "About",
                "Contacts",
              ].map((item, index) => (
                <Link
                  key={index}
                  href={
                    item === "Home"
                      ? "/"
                      : `/${item.toLowerCase().replace(" ", "-")}`
                  }
                  className="nav-link text-xl font-medium text-slate-100 whitespace-nowrap hover:text-[#F2F013]"
                  data-text={item}
                >
                  {item}
                </Link>
              ))}
            </div>
            <div className="absolute right-4 md:hidden">
              <button
                className="text-white focus:outline-none z-50"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div
          className={`fixed inset-x-0 top-0 h-screen bg-black md:hidden mobile-menu ${
            isMenuOpen ? "open" : ""
          }`}
        >
          <div className="flex flex-col space-y-6 h-full justify-center items-center">
            {[
              "Home",
              "Creative Production",
              "Art Tech",
              "Media",
              "About",
              "Contacts",
            ].map((item, index) => (
              <Link
                key={index}
                href={
                  item === "Home"
                    ? "/"
                    : `/${item.toLowerCase().replace(" ", "-")}`
                }
                className="nav-link text-2xl font-medium text-slate-100 whitespace-nowrap hover:text-[#F2F013]"
                data-text={item}
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
