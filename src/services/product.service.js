import createApiClient from "./api.service";
class ProductService {
    constructor(baseUrl = "/Nshop") {
        this.api = createApiClient(baseUrl);
    }
    async getAll() {
        return (await this.api.get("/")).data;
    }
    async create(data) {
        return (await this.api.post("/admin/addproduct", data)).data;
    }
    // async deleteAll() {
    //     return (await this.api.delete("/")).data;
    // }
    async get(id) {
        return (await this.api.get(`/admin/FormEditProduct/${id}`)).data;
    }
    async update(id, data) {
        return (await this.api.put(`/admin/FormEditProduct/${id}`, data)).data;
    }
    async filterByNameProduct(data) {
        return (await this.api.post("/filterByName",data)).data;
    }
    // async delete(id) {
    //     return (await this.api.delete(`/${id}`)).data;
    // }
}
export default new ProductService();