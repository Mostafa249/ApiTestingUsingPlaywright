import { Base } from "./base";

export class CreateOrder extends Base {
    public createOrder(payload?: object) {
        return this.request({
            method: "post",
            url: "/store/order",
            data: {
                ...payload
            }
        });
    }
}