import axios from "axios";
import BackendAdress from "./address";

const MainAxiosRequest = () => {
  return axios.create({ baseURL: BackendAdress });
};

export default MainAxiosRequest;
