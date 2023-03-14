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
  LessonTitle,
} from "./Course.styled";
import { ImBlocked } from "react-icons/im";
const Course = () => {
  const [course, setCourse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const getResults = async () => {
      try {
        const res = await getCourseById(id);
        console.log(res);
        setCourse(res);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getResults();
  }, []);

  if (!course) return null;
  console.log(course);
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
          {course.lessons?.map((lesson) => (
            <VideoItem key={lesson.id}>
              <LessonTitle>
                {lesson.title}
                {lesson.status === "locked" && <ImBlocked color="red" size={15} />}
              </LessonTitle>
              <video
                controls
                width="320"
                src={lesson.link}
                loop
                autoPlay
                preload="auto"
                type="application/x-mpegURL"
                poster={`${lesson.previewImageLink}/lesson-${lesson.order}.webp`}
              ></video>
              
            </VideoItem>
          ))}
        </ul>
      </Container>
    </StyledSection>
  );
};

export default Course;
