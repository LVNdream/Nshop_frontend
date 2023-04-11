import createApiClient from "./api.service";
class AccountService {
    constructor(baseUrl = "/Nshop") {
        this.api = createApiClient(baseUrl);
    }
    // async getAll() {
    //     return (await this.api.get("/")).data;
    // }

    // ham tao tai khoan 
    async createAccount(data) {
        return (await this.api.post("/account/register", data)).data;
    }

    // ham kiem tra dang nhap
    async loginAccount(data) {
        return (await this.api.post("/account/login", data)).data;
    }


    // async get(id) {
    //     return (await this.api.get(`/${id}`)).data;
    // }

    
    // async update(id, data) {
    //     return (await this.api.put(`/${id}`, data)).data;
    // }



    // async delete(id) {
    //     return (await this.api.delete(`/${id}`)).data;
    // }
}
export default new AccountService();