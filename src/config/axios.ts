import Axios from "axios";

const axiosConfig = Axios.create({
  baseURL: `${process.env.REACT_APP_BASE_API_URL}`,
  timeout: 30000,
});

export default axiosConfig;
