import axios, { HeadersDefaults } from "axios";

interface CommonHeaderProperties extends HeadersDefaults {
  ["Access-Control-Allow-Origin"]: "*";
  Authorization: string;
}

axios.defaults.baseURL = "http://api.wisey.app/api/v1";

const setHeader = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const getCourses = async () => {
  try {
    const token = await axios.get("/auth/anonymous?platform=subscriptions");
    setHeader(token.data.token);
    const courses = await axios.get("/core/preview-courses");
    console.log(courses.data);
  } catch (error) {}
};
