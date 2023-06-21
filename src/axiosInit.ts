import axios from "axios";
import { UserApiFactory } from "../api/example";

// Create axios instance
const axiosInstance = axios.create();

// Configuration and base path are not provided
const apiService = UserApiFactory(undefined, undefined, axiosInstance);

export { apiService, axiosInstance };
