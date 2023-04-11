import createApiClient from "./api.service";
class PaymentService {
    constructor(baseUrl = "/Nshop") {
        this.api = createApiClient(baseUrl);
    }
    async getAllOrder(email) {
        return (await this.api.get(`/payment/${email}`)).data;
    }
    async createOrder(data) {
        return (await this.api.post("/payment", data)).data;
    }
    // async deleteAll() {
    //     return (await this.api.delete("/")).data;
    // }


    // async get(id) {
    //     return (await this.api.get(`/${id}`)).data;
    // }

    
    // async update(id, data) {
    //     return (await this.api.put(`/${id}`, data)).data;
    // }



    // async delete(id) {
    //     return (await this.api.delete(`/${id}`)).data;
    // }
    async deleteOrder(data) {
        return (await this.api.post("/payment/cancleOrder",data)).data;
    }
}
export default new PaymentService();