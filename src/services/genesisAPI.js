import axios from "axios";

axios.defaults.baseURL = "http://api.wisey.app/api/v1";

const setHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const getToken = async () => {
  try {
    const token = await axios.get("/auth/anonymous?platform=subscriptions");
    setHeader(token.data.token);
  } catch (error) {
    console.log(error);
  }
};

export const getCourses = async () => {
  try {
    await getToken();
    const res = await axios.get("/core/preview-courses");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
