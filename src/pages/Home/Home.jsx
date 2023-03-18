import React, { useState, useEffect, useMemo } from "react";
import { Container } from "../../components/SharedLayout/SharedLayout.styled";
import { getCourses } from "../../services/genesisAPI";
import Logo from "../../components/Logo/Logo";
import CourseItem from "../../components/CourseItem/CourseItem";
import Loader from "../../components/Loader/Loader";
import Pagination from "../../components/Pagination/Pagination";
import { StyledSection, MainTitle, StyledList } from "./Home.styled";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSearchParams } from "react-router-dom";

let pageSize = 10;
const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const page = searchParams.get("page") ?? "1";

  useEffect(() => {
    const getResults = async () => {
      try {
        const res = await getCourses();
        res.courses.sort((a, b) => Date.parse(a) - Date.parse(b));
        setCourses(res.courses);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getResults();
  }, []);

  const updateQueryString = (page) => {
    const nextParams = page !== "" ? { page } : {};
    setSearchParams(nextParams);
  };

  const currentCourseData = useMemo(() => {
    const firstPageIndex = (page - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return courses.slice(firstPageIndex, lastPageIndex);
  }, [page, courses]);

  return (
    <StyledSection>
      <Container>
        {isLoading && <Loader />}
        <MainTitle>
          <Logo /> - Learning has never been more convenient!
        </MainTitle>
        <StyledList>
          {currentCourseData.map((course) => {
            return <CourseItem key={course.id} course={course} />;
          })}
        </StyledList>
        <Pagination
          currentPage={Number(page)}
          totalCount={courses.length}
          pageSize={pageSize}
          onPageChange={(page) => updateQueryString(page)}
        />
      </Container>
    </StyledSection>
  );
};

export default Home;
