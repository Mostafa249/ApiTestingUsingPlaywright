import { api } from "@api/.";
import { info, rp_log } from "@utils/logger";
import { AxiosResponse } from "axios";
import { test, expect } from "playwright/test";

const invalidOrderId = 0;
const invalidErrorMessage = "Order not found";
const validOrderId = 9;

test.describe("Test get order by id ", () => {
    test("Get order by invalid id ", async () => {
        rp_log(`
        /**
         * Set your request
         * Provide your invalid id 
         * Send Get request
        */
        `)
        info(`Get order by invalid id `)
        const getOrderByinvalidIdRes: AxiosResponse = await api.orders.client.getOrders.getOrderByID(invalidOrderId);
        info(`Assert on response status`);
        expect(getOrderByinvalidIdRes.status).toEqual(404);
        info(`Assert on error message in response`);
        expect(getOrderByinvalidIdRes.data.message).toEqual(invalidErrorMessage);
        info(`All tests passed`);
    });
    test("Get order by valid id ", async () => {
        rp_log(`
        /**
         * Set your request
         * Provide your valid id 
         * Send Get request
        */
        `)
        info(`Get order by valid id `)
        const getOrderByvalidIdRes: AxiosResponse = await api.orders.client.getOrders.getOrderByID(validOrderId);
        info(`Assert on response status`);
        expect(getOrderByvalidIdRes.status).toEqual(200);
        info(`Assert on error message in response`);
        expect(getOrderByvalidIdRes.data.id).toEqual(validOrderId);
        info(`All tests passed`);
    });
});