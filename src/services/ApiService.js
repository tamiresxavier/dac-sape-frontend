import axios from "axios";

const httpClient = axios.create ({
    baseURL:'http://localhost:8080/api'
})

export default class ApiService {
    
    constructor(endpoint) {
        this.endpoint = endpoint;
    }

    post(url, params) {
        url = this.builderUrl(url);
        return httpClient.post(url, params);
    }

    put(url, params) {
        url = this.builderUrl(url);
        return httpClient.put(url, params);
    }

    get(url) {
        url = this.builderUrl(url);
        return httpClient.get(url);
    }
    
    delete(url) {
        url = this.builderUrl(url);
        return httpClient.delete(url);
    }

    builderUrl(url) {
        return `${this.endpoint}${url}`;
    }
}