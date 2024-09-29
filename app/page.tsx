import React from "react";
import Navigation from "./components/Navigation";

const Home: React.FC = () => {
  return (
    <div className="relative">
      <div className="video-banner h-screen w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="min-w-full min-h-full object-cover"
        >
          <source src="/video.webm" type="video/webm" />
          <source src="/video.mov" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <Navigation />
      {/* <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white">
          Welcome to our Home Page
        </h1>
      </div> */}
      {/* Add more content here */}
    </div>
  );
};

export default Home;
