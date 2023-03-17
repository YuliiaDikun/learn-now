import React, { useEffect, useRef, useState } from "react";
import { ImBlocked } from "react-icons/im";
import VideoJS from "../VideoJS/VideoJS";
import throttle from "lodash.throttle";
import {
  VideoItem,
  LessonTitle,
  LessonTextWrapper,
  StyledOpenSpan,
  VideoWrapper,
  ProgressBarContainer,
  ProgressBar,
} from "./Lesson.styled";
import videojs from "video.js";
const Lesson = ({ lesson, i, openLesson, toggleLessonVideo }) => {
  const { id, title, status, link, previewImageLink, order, duration } = lesson;

  const playerRef = useRef(null);

  const [progressBarStyles, setProgressBarStyles] = useState({
    width: "0%",
    backgroundColor: "transparent",
  }); 
 
  const lessonsFromLocalStorage =
    JSON.parse(localStorage.getItem("lessons")) ?? {};  

  const lessonTime = lessonsFromLocalStorage[openLesson] || 0; 
  
  const isLocked = status === "locked";
  const isVideoAvailable = isLocked ? "locked" : id;
  const open = openLesson === id;

  useEffect(() => {
    const updatedProgressBarStyles = {
      backgroundColor: "green",
      boxShadow: "0px 1px 8px rgba(204, 131, 36, 0.5)",
    };
    let progressVideo = (lessonTime / duration) * 100;
    
    updatedProgressBarStyles.width = `${progressVideo}%`;
    setProgressBarStyles(updatedProgressBarStyles);
  }, [duration, lessonTime]);

  const handlePlayerReady = (player) => {
    playerRef.current = player;
    
    function getTime () {       
      localStorage.setItem(
        "lessons",
        JSON.stringify({   
          ...lessonsFromLocalStorage,
          [`${openLesson}`]: player.cache_.currentTime,
        })
      );
  
    }  
    console.log(lessonTime);
    player.currentTime(lessonTime);    

    player.on("timeupdate", throttle(getTime, 1000));

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };

  const videoJsOptions = {
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    poster: `${previewImageLink}/lesson-${order}.webp`,
    sources: [
      {
        src: link,
        type: "application/x-mpegURL",
      },
    ],
  };

  return (
    <VideoItem>
      <LessonTextWrapper onClick={() => toggleLessonVideo(isVideoAvailable)}>
        <LessonTitle>
          {i + 1}. {title}
          {isLocked && <ImBlocked color="red" size={15} />}
        </LessonTitle>
        <StyledOpenSpan clicked={open}>+</StyledOpenSpan>
      </LessonTextWrapper>
      <VideoWrapper open>
        {open && (
          <>
          <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
          <ProgressBarContainer>
          <ProgressBar style={{ ...progressBarStyles }}></ProgressBar>
            </ProgressBarContainer>
            </>
        )}
      </VideoWrapper>      
    </VideoItem>
  );
};

export default Lesson;
