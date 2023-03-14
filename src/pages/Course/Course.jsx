import React, { useEffect, useState } from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { useParams, useLocation, Outlet } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getCourseById } from "../../services/genesisAPI";
import Loader from "../../components/Loader/Loader";
import { StyledSkils } from "../../components/CourseItem/CorseItem.styled";
import { Container } from "../../components/SharedLayout/SharedLayout.styled";
import {
  StyledSection,
  GoBackLink,
  ImgWrapper,
  DescrWrapper,
  StyledProductTitle,
  StyledP,
} from "./Course.styled";
import { ImBlocked } from "react-icons/im";
const Course = () => {
  const [course, setCourse] = useState({});
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
console.log(course)
  return (
    <main>
      <Container>
        <GoBackLink to={backLinkHref}>
          <MdOutlineArrowBackIosNew size={20} /> Back to courses
        </GoBackLink>
        {isLoading ? (
          <Loader />
        ) : (
          <StyledSection>
            <ImgWrapper>
              <img
                src={course.previewImageLink + "/cover.webp"}
                alt={course.title}
              />
            </ImgWrapper>
            <DescrWrapper>
              <StyledProductTitle>{course.title}</StyledProductTitle>
              {course.meta.skills ? (
                <div>
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
              <h3>Course Lessons</h3>
              <ul>
                {course.lessons.map((lesson) => (
                  <p key={lesson.id}>
                    <a href={lesson.link}>{lesson.title}</a>
                    {lesson.status === "locked" && <ImBlocked size={20} />}
                  </p>
                ))}
              </ul>
            </DescrWrapper>
          </StyledSection>
        )}
        <Outlet/>
      </Container>
    </main>
  );
};

export default Course;
