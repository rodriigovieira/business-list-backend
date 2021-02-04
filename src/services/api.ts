import axios from "axios";
import { APIBaseURL } from "../constants";


export const defaultClient = axios.create({
  baseURL: APIBaseURL,
  timeout: 5000,
})
