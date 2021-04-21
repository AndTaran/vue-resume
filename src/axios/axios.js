import axios from "axios";
import router from "../router";

const requestAxios = axios.create({
  baseURL: "https://vue-resume-984ea-default-rtdb.firebaseio.com",
  headers: {
    "Content-Type": "application/json",
  },
});

requestAxios.interceptors.response.use(null, (error) => {
  if (error.response.status === 401) {
    router.push("/");
  }

  return Promise.reject(error);
});

export default requestAxios;
