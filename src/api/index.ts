import { petStore } from "./petStore";
import { orders } from "./order";
class API {
    public petStore: petStore = new petStore();
    public orders: orders = new orders();

    private static _instance: API;

    private constructor() { }

    static getInstance(): API {
        if (!API._instance) {
            API._instance = new API();
        }
        return API._instance;
    }
}

export let api = API.getInstance();