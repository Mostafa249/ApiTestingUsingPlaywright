import { Base } from "./base";

export class GetOrders extends Base {
    public getOrderByID(orderID?: number) {
        return this.request({
            method: "get",
            url: `/store/order/${orderID}`,
        });
    }
}