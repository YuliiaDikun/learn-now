import React, { useState, useEffect} from "react";
import { Container } from "../../components/SharedLayout/SharedLayout.styled";
import { getCourses } from "../../services/genesisAPI";
const Home = () => {
  const [courses, setCourses] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(()=>{     
    const getResults = async () => {
      const data = await getCourses();  
      console.log(data)
    };
    getResults();
  },[])
  return (
    <section>
      <Container>
        <h1>
          <span>Learn</span>now - Learning has never been more convenient!
        </h1>
      </Container>
    </section>
  );
};

export default Home;
