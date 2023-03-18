import { useEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import { VideoWrapper } from "./VideoJS.styled";

export const VideoJS = ({ options, onReady, preview }) => {  
 const videoRef = useRef(null);
  const playerRef = useRef(null); 

  useEffect(() => {
   
    if (!playerRef.current) {
     
      const videoElement = document.createElement("video-js");

      videoElement.classList.add('vjs-big-play-centered');
      videoRef.current.appendChild(videoElement);

      const player = playerRef.current = videojs(videoElement, options, () => {       
        onReady && onReady(player);
      });
   
    } else {
      const player = playerRef.current;

      player.autoplay(options.autoplay);
      player.src(options.sources);
    }
  }, [options, onReady]);

  
  useEffect(() => {
    const player = playerRef.current;

    return () => {
      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef]); 

  return (
    <VideoWrapper preview={preview} data-vjs-player>
      <div ref={videoRef} />
    </VideoWrapper>
  );
};

export default VideoJS;
