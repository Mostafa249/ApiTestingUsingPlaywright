import { GetOrders } from "./client/getOrders";
import { CreateOrder } from "./client/createOrder";

class Client {
    public getOrders: GetOrders = new GetOrders();
    public createOrder: CreateOrder = new CreateOrder();
}
class Action {
}

export class orders {
    public client = new Client();
    public action = new Action();
}
