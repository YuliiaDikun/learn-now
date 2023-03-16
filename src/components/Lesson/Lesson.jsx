import React, { useRef } from "react";
import { ImBlocked } from "react-icons/im";
import VideoJS from "../VideoJS/VideoJS";
import {
  VideoItem,
  LessonTitle,
  LessonTextWrapper,
  StyledOpenSpan,
  VideoWrapper,
} from "./Lesson.styled";
import videojs from "video.js";
const Lesson = ({ lesson, i, openLesson, toggleLessonVideo }) => {
  const playerRef = useRef(null);

  const { id, title, status, link, previewImageLink, order } = lesson;
  const isLocked = status === "locked";
  const isVideoAvailable = isLocked ? "locked" : id;
  const open = openLesson === id;
  
  
  const handlePlayerReady = (player) => {
    playerRef.current = player;

    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

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
          <VideoJS
            options={videoJsOptions}
            onReady={handlePlayerReady}
          />
        )}
        {/* <video
          className="video-js"
          controls
          src={link}
          type="application/x-mpegURL"
          id={`my-video-${i}`}
          width="640"
          height="264"
          autoPlay={false}
          data-setup="{}"
          poster={`${previewImageLink}/lesson-${order}.webp`}
        ></video> */}
      </VideoWrapper>
    </VideoItem>
  );
};

export default Lesson;
