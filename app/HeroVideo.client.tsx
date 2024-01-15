"use client";

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const ReactPlayerComponent = () => {
  const [showPlayer, setShowPlayer] = useState(true);
  const videosrc = "/orchestra-example.mp4";

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowPlayer(scrollPosition <= 700);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    showPlayer && (
      <ReactPlayer
        url={videosrc}
        className="absolute opacity-50 -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 !min-w-full !min-h-full !h-full !w-[400%] desktop:!w-full desktop:!h-[200%] max:!w-[1440px] max:!h-[810px]"
        light={false}
        muted={true}
        loop={true}
        playing={true}
        playsinline={true}
      />
    )
  );
};

export default ReactPlayerComponent;