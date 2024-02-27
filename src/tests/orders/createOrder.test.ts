import { api } from "@api/.";
import { info, rp_log } from "@utils/logger";
import { AxiosResponse } from "axios";
import { test, expect } from "playwright/test";
import { createOrderWithoutPetID, createOrderWithoutQuantity } from "./testData/ordersPayloads";

test.describe("Test create new order ", () => {
    test("Create order without pet id ", async () => {
        rp_log(`
        /**
         * Set your request
         * Provide your payload 
         * Send post request
        */
        `)
        info(`Create new order without pet id`)
        const createOrderWithoutPetIdRes: AxiosResponse = await api.orders.client.createOrder.createOrder(createOrderWithoutPetID);
        info(`Assert on response status`);
        expect(createOrderWithoutPetIdRes.status).toEqual(200);
        info(`Assert that returned pet id = 0`);
        expect(createOrderWithoutPetIdRes.data.petId).toEqual(0);
        info(`All tests passed`);
    });
    test("Create order without quantity ", async () => {
        rp_log(`
        /**
         * Set your request
         * Provide your payload 
         * Send post request
        */
        `)
        info(`Create new order without quantity`)
        const createOrderWithoutQuantityRes: AxiosResponse = await api.orders.client.createOrder.createOrder(createOrderWithoutQuantity);
        info(`Assert on response status`);
        expect(createOrderWithoutQuantityRes.status).toEqual(200);
        info(`Assert that returned quantity = 0`);
        expect(createOrderWithoutQuantityRes.data.quantity).toEqual(0);
        info(`All tests passed`);
    });
});