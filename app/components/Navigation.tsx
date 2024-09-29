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
          100% {
            clip: rect(70px, 9999px, 40px, 0);
          }
        }

        @keyframes glitch-anim-2 {
          0% {
            clip: rect(60px, 9999px, 50px, 0);
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
          animation: glitch-anim-1 1s infinite linear alternate-reverse;
        }

        .nav-link:hover::after {
          left: -2px;
          text-shadow: -2px 0 #00fff9, 2px 2px #ff00c1;
          animation: glitch-anim-2 0.5s infinite linear alternate-reverse;
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
        className={`font-nav w-full fixed top-0 left-0 transition-opacity duration-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="w-full bg-transparent md:bg-transparent flex flex-col md:flex-row items-center h-auto md:h-32">
          <div className="w-full md:w-1/4 flex items-center justify-between md:justify-start py-4 md:py-0 px-4 bg-black md:bg-transparent">
            <Image src="/logo2.svg" alt="Logo" width={150} height={150} />
            <button
              className="md:hidden text-white focus:outline-none z-50"
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
          <div
            className={`fixed inset-x-0 top-0 h-screen bg-black md:bg-transparent md:relative md:w-1/2 md:h-auto mobile-menu ${
              isMenuOpen ? "open" : ""
            } md:flex items-center justify-center md:transform-none`}
          >
            <div className="flex flex-col md:flex-row md:justify-center md:items-center space-y-6 md:space-y-0 md:space-x-8 h-full justify-center">
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
                  className="nav-link text-2xl md:text-xl font-medium text-slate-100 whitespace-nowrap hover:text-[#F2F013] text-center"
                  data-text={item}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden md:block md:w-1/4"></div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
