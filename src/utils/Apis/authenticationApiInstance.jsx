import axios from "axios";

const authenticationApiInstance = axios.create({
    baseURL: `http://localhost:8080/api/authentications`,
});

export default authenticationApiInstance;