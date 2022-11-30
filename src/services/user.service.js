import createApiClient from "./api.service";
class userService {
    constructor(baseUrl = "/api/book") {
        this.api = createApiClient(baseUrl);
    }
    async create(data) {
        return (await this.api.post("/", data)).data;
    }
    async get(email) {
        return (await this.api.get(`/${email}`)).data;
    }
}
export default new userService();