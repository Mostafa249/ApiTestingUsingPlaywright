import { httpClient } from "@http_client/.";
import { petStoreAxiosInstanceConfig } from "@env";

export class Base extends httpClient {
    constructor() {
        super(petStoreAxiosInstanceConfig);
    }
}