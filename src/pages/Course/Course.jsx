import React, { useEffect, useState } from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { useParams, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getCourseById } from "../../services/genesisAPI";
import Loader from "../../components/Loader/Loader";
import { StyledSkils } from "../../components/CourseItem/CorseItem.styled";
import { Container } from "../../components/SharedLayout/SharedLayout.styled";
import {
  StyledSection,
  StyledCourse,
  GoBackLink,
  ImgWrapper,
  DescrWrapper,
  StyledProductTitle,
  StyledP,
  VideoItem,
  LessonTextWrapper,
  LessonTitle,
  StyledOpenSpan,
  VideoWrapper,
} from "./Course.styled";
import { ImBlocked } from "react-icons/im";
const Course = () => {
  const [course, setCourse] = useState(null);
  const [openLesson, setOpenLesson] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";

  const { id } = useParams();

  useEffect(() => {
    const getResults = async () => {
      try {
        const res = await getCourseById(id);
        setCourse(res);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getResults();
  }, [id]);

  if (!course) return null;

  const toggleLessonVideo = (id) => {
    setOpenLesson((prevId) => {
      if (prevId === id) {
        return "";
      } 
      if (id === "locked") {
        toast.error('Current video is locked');
        return '';
      } else { 
        return id;
      }
    });
  };
  return (
    <StyledSection>
      <Container>
        <GoBackLink to={backLinkHref}>
          <MdOutlineArrowBackIosNew size={20} /> Back to courses
        </GoBackLink>
        {isLoading ? (
          <Loader />
        ) : (
          <StyledCourse>
            <ImgWrapper>
              <img
                src={`${course.previewImageLink}/cover.webp`}
                alt={course.title}
              />
            </ImgWrapper>
            <DescrWrapper>
              <StyledProductTitle>{course.title}</StyledProductTitle>
              {course.meta.skills ? (
                <div>
                  <StyledP>{course.description}</StyledP>
                  <StyledSkils>Course skills:</StyledSkils>
                  <ul>
                    {course.meta?.skills?.map((skill, i) => {
                      return (
                        <li key={i}>
                          <StyledP>{skill}</StyledP>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ) : (
                <StyledSkils>Please help us to attract new skills!</StyledSkils>
              )}
            </DescrWrapper>
          </StyledCourse>
        )}
        <h3>Course Lessons: </h3>
        <ul>
          {course.lessons?.map((lesson, i) => {
            const { id, title, status, link, previewImageLink, order } = lesson;
            const isLocked = status === "locked";
            const isVideoAvailable = isLocked ? 'locked' : id;
            return (
              <VideoItem key={id}>
                <LessonTextWrapper onClick={() => toggleLessonVideo(isVideoAvailable)}>
                  <LessonTitle>
                    {i + 1}. {title}
                    {isLocked && (
                      <ImBlocked color="red" size={15} />
                    )}
                  </LessonTitle>
                  <StyledOpenSpan clicked={openLesson === id}>
                    +
                  </StyledOpenSpan>
                </LessonTextWrapper>
                <VideoWrapper open={openLesson === id}>
                  <video
                    controls
                    width="320"
                    src={link}
                    loop
                    autoPlay
                    preload="auto"
                    type="application/x-mpegURL"
                    poster={`${previewImageLink}/lesson-${order}.webp`}
                  ></video>
                </VideoWrapper>
              </VideoItem>
            )
          })}
        </ul>
      </Container>
    </StyledSection>
  );
};

export default Course;
