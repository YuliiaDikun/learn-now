import axios from "axios";
import { toast } from "react-toastify";
const BASE_URL = "https://api.wisey.app/api/v1";

axios.defaults.baseURL = `${BASE_URL}`;

const setToken = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const getToken = async () => {
  try {
    const res = await axios.get("/auth/anonymous?platform=subscriptions");
    setToken(res.data.token);
  } catch (error) {
    toast.error(error.message);
  }
};

const getCourses = async () => {
  try {
    await getToken();
    const res = await axios.get("/core/preview-courses");
    return res.data;
  } catch (error) {
    toast.error(error.message);
  }
};

const getCourseById = async (id) => {
  try {
    await getToken();
    const res = await axios.get(`/core/preview-courses/${id}`);
    return res.data;
  } catch (error) {
    toast.error(error.message);
  }
};

export { getCourses, getCourseById };
