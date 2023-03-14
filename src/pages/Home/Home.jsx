import React, { useState, useEffect } from "react";
import { Container } from "../../components/SharedLayout/SharedLayout.styled";
import { getCourses } from "../../services/genesisAPI";
import Logo from "../../components/Logo/Logo";
import CourseItem from "../../components/CourseItem/CourseItem";
import { StyledSection, MainTitle, StyledList } from "./Home.styled";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../../components/Loader/Loader";
const Home = () => {
  const [courses, setCourses] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getResults = async () => {
      try {
        const res = await getCourses();
        setCourses(res.courses);
      } catch (error) {
        toast.error(error.message);
      } finally { 
        setIsLoading(false);
      }
    };
    getResults();
  }, []);
  return (
    <StyledSection>
      <Container>
        { isLoading && <Loader/>}
        <MainTitle>
          <Logo /> - Learning has never been more convenient!
        </MainTitle>
        <StyledList>
          {courses.map((course) => {
            return <CourseItem key={course.id} course={course} />;
          })}
        </StyledList>
      </Container>
    </StyledSection>
  );
};

export default Home;
