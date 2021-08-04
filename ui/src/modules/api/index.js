import axios from "axios";

const base = axios.create({
    baseURL: "http://spa_template.test" || "",
    headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        withCredentials: true
    },
});

export default base;
