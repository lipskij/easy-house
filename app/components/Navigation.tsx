"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Navigation: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

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
          animation: glitch-anim-1 1s infinite linear alternate-reverse;
        }

        .nav-link:hover::after {
          left: -2px;
          text-shadow: -2px 0 #00fff9, 2px 2px #ff00c1;
          animation: glitch-anim-2 0.5s infinite linear alternate-reverse;
        }
      `}</style>
      <nav
        className={`font-nav w-full fixed top-0 left-0 transition-opacity duration-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="w-full bg-transparent flex items-center h-32 px-4">
          <div className="w-1/4 flex items-center">
            <Image src="/logo2.svg" alt="Logo" width={200} height={200} />
            {/* <Image src="/5.svg" alt="Logo" width={200} height={200} /> */}
          </div>
          <div className="w-1/2 flex justify-center items-center">
            <div className="flex space-x-16 overflow-x-auto">
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
          </div>
          <div className="w-1/4"></div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
