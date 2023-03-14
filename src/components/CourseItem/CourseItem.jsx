import React from "react";
import { MdOutlinePlayLesson } from "react-icons/md";
import { FcRating } from "react-icons/fc";
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
} from "./CorseItem.styled";
import { useLocation } from "react-router-dom";
const CourseItem = ({ course }) => {
  const location = useLocation();
  const { id, previewImageLink, title, lessonsCount, meta, rating } = course;
  return (
    <StyledItem to={`${id}`} state={{ from: location }}>
      <CourseWrapper>
        <ImgWrapper>
          <img src={`${previewImageLink}/cover.webp`} alt={title} />
        </ImgWrapper>
        <DescWrapper>
          <CourseText>{title}</CourseText>
          <RatingWrapper>
            <p>
              Lessons:
              <span>{lessonsCount}</span>
              <MdOutlinePlayLesson size={20} />
            </p>
            <p>
              Rating: <span>{rating} </span> <FcRating size={20} />
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
