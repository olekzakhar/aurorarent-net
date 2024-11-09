'use client'

import React, { useRef } from 'react';

const FloatingPlayer = ({ videoUrl }) => {
  const videoRef = useRef(null);

  const togglePictureInPicture = async () => {
    if (!document.pictureInPictureEnabled) {
      console.error('Picture-in-Picture is not supported in this browser.');
      return;
    }
    
    if (videoRef.current && typeof videoRef.current.requestPictureInPicture === 'function') {
      try {
        if (document.pictureInPictureElement) {
          await document.exitPictureInPicture();
        } else {
          await videoRef.current.requestPictureInPicture();
        }
      } catch (error) {
        console.error('Error enabling Picture-in-Picture:', error);
      }
    } else {
      console.error('Picture-in-Picture is not available on this video element.');
    }
  };

  return (
    <div className="realtive floating-player-container">
      <video ref={videoRef} src={videoUrl} controls onClick={togglePictureInPicture} />
      {/* <div className="absolute top-0 left-0 w-full bg-orange-500">fasfasf</div> */}
    </div>
  );
};

export default FloatingPlayer;
