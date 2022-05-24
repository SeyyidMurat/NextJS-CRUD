import axios from "axios";

const api = axios.create({
	baseURL: "https://word-learn-apps.herokuapp.com/",
});

export default api;
