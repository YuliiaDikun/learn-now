import React, { useRef } from "react";
import { MdOutlinePlayLesson } from "react-icons/md";
import { FcRating } from "react-icons/fc";
import VideoJS from "../VideoJS/VideoJS";
import {
  StyledItem,
  CourseWrapper,
  ImgWrapper,
  DescWrapper,
  CourseText,
  RatingWrapper,
  StyledSkils,
  StyledSkillItem,
  SkillsList,
} from "./CourseItem.styled";
import { useLocation } from "react-router-dom";
const CourseItem = ({ course }) => {
  const playerRef = useRef(null);
  const location = useLocation();
  const { id, previewImageLink, title, lessonsCount, meta, rating } = course;

  const handlePlayerReady = (player) => {
    playerRef.current = player;
    player.muted(true);
    function handlePlay() {
      player.play();
    }
    function handlePause() {
      player.pause();
    }
    // You can handle player events here, for example:
    player.on("mouseover", handlePlay);

    player.on("mouseout", handlePause);
  };

  const videoJsOptions = {
    autoplay: false,
    controls: false,
    responsive: true,
    fluid: true,
    poster: `${previewImageLink}/cover.webp`,
    sources: [
      {
        src: meta.courseVideoPreview?.link,
        type: "application/x-mpegURL",
      },
    ],
  };
  return (
    <StyledItem to={`${id}`} state={{ from: location }}>
      <CourseWrapper>
        <ImgWrapper>
          {meta.courseVideoPreview?.link ? (
            <VideoJS
              options={videoJsOptions}
              onReady={handlePlayerReady}
              preview={true}
            />
          ) : (
            <img src={`${previewImageLink}/cover.webp`} alt={title} />
          )}
        </ImgWrapper>
        <DescWrapper>
          <CourseText>{title}</CourseText>
          <RatingWrapper>
            <p>
              Available Lessons:
              <span>{lessonsCount}</span>
              <MdOutlinePlayLesson size={20} />
            </p>
            <p>
              Rating: <span>{rating.toFixed(1)} </span> <FcRating size={20} />
            </p>
          </RatingWrapper>
          {meta.skills ? (
            <div>
              <StyledSkils>Course skills:</StyledSkils>
              <SkillsList>
                {meta?.skills?.map((skill, i) => {
                  return (
                    <StyledSkillItem key={i}>
                      <p>{skill}</p>
                    </StyledSkillItem>
                  );
                })}
              </SkillsList>
            </div>
          ) : (
            <StyledSkils>Please help us to attract new skills!</StyledSkils>
          )}
        </DescWrapper>
      </CourseWrapper>
    </StyledItem>
  );
};

export default CourseItem;
