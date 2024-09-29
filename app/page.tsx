"use client";

import React from "react";
import Navigation from "./components/Navigation";

const Home: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <style jsx>{`
        .video-banner {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .video-banner video {
          object-fit: cover;
          width: 100%;
          height: 100%;
        }

        @media (max-aspect-ratio: 16/9) {
          .video-banner video {
            width: auto;
            height: 100%;
          }
        }

        @media (min-aspect-ratio: 16/9) {
          .video-banner video {
            width: 100%;
            height: auto;
          }
        }

        @media (max-width: 767px) {
          .video-banner {
            height: 100vh; /* Ensure full height on mobile */
          }
        }
      `}</style>
      <div className="video-banner">
        <video autoPlay loop muted playsInline>
          <source src="/video.webm" type="video/webm" />
          <source src="/video.mov" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <Navigation />
    </div>
  );
};

export default Home;
