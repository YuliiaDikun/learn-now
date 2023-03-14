import React, { useState, useEffect } from "react";
import { Container } from "../../components/SharedLayout/SharedLayout.styled";
import { getCourses } from "../../services/genesisAPI";
import Logo from "../../components/Logo/Logo";
import CourseItem from "../../components/CourseItem/CourseItem";
import { StyledSection, MainTitle, StyledList } from "./Home.styled";
const Home = () => {
  const [courses, setCourses] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getResults = async () => {
      const res = await getCourses();
      setCourses(res.courses);
    };
    getResults();
  }, []);
  return (
    <StyledSection>
      <Container>
        <MainTitle>
          <Logo /> - Learning has never been more convenient!
        </MainTitle>
        <StyledList>
          {courses.map((course) => {
            return (
              <CourseItem key={course.id} course={course } />
            );
          })}
        </StyledList>
      </Container>
    </StyledSection>
  );
};

export default Home;
