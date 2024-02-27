import { api } from "@api/.";
import { info, rp_log } from "@utils/logger";
import { AxiosResponse } from "axios";
import { test, expect } from "playwright/test";

const status = [
    { status: "available" },
    { status: "pending" },
    { status: "sold" }
]

test.describe("Test get pets by status", () => {
    test("Get all available pets ", async () => {
        rp_log(`
        /**
         * Set your request
         * Provide your available status
         * Send Get request
        */
        `)
        info(`Get all available pets`)
        const getAllAvailablePetsResponse: AxiosResponse = await api.petStore.client.getPets.getPetsByStatus(status[0]);
        info(`Assert the response status code`);
        expect(getAllAvailablePetsResponse.status).toEqual(200);
        info(`Get array of all returned status`);
        const getPetsStatusRes = await api.petStore.action.getPetsActions.getPetsStatus(status[0]);
        if (getPetsStatusRes[0].length !== 0) {
            info(`Assert that all returned pets have available status`);
            expect(getPetsStatusRes[0][getPetsStatusRes.length - 1]).toBe("available");
        }
        info(`All tests passed `)
    });
    test("Get all pending pets ", async () => {
        rp_log(`
        /**
         * Set your request
         * Provide your pinding status
         * Send Get request
        */
        `)
        info(`Get all pinding pets`)
        const getAllAvailablePetsResponse: AxiosResponse = await api.petStore.client.getPets.getPetsByStatus(status[1]);
        info(`Assert the response status code`);
        expect(getAllAvailablePetsResponse.status).toEqual(200);
        info(`Get array of all returned status`);
        const getPetsStatusRes = await api.petStore.action.getPetsActions.getPetsStatus(status[1]);
        if (getPetsStatusRes[0].length !== 0) {
            info(`Assert that all returned pets have pinding status`);
            expect(getPetsStatusRes[0][getPetsStatusRes.length - 1]).toBe("pending");
        }
        info(`All tests passed `)
    });
    test("Get all sold pets ", async () => {
        rp_log(`
        /**
         * Set your request
         * Provide your sold status
         * Send Get request
        */
        `)
        info(`Get all sold pets`)
        const getAllAvailablePetsResponse: AxiosResponse = await api.petStore.client.getPets.getPetsByStatus(status[2]);
        info(`Assert the response status code`);
        expect(getAllAvailablePetsResponse.status).toEqual(200);
        info(`Get array of all returned status`);
        const getPetsStatusRes = await api.petStore.action.getPetsActions.getPetsStatus(status[2]);
        if (getPetsStatusRes[0].length !== 0) {
            info(`Assert that all returned pets have sold status`);
            expect(getPetsStatusRes[0][getPetsStatusRes.length - 1]).toBe("sold");
        }
        info(`All tests passed `)
    });
    test("Get pet with invalid status ", async () => {
        rp_log(`
        /**
         * Set your request
         * Provide your invalid status
         * Send Get request
        */
        `)
        info(`Get pet with invalid status`)
        const getAllAvailablePetsResponse: AxiosResponse = await api.petStore.client.getPets.getPetsByStatus({ status: "test" });
        info(`Assert the response status code`);
        expect(getAllAvailablePetsResponse.status).toEqual(200);
        info(`Assert that returned response is empty`);
        expect(getAllAvailablePetsResponse.data).toBeNull;
        info(`All tests passed `)
    });
});
test.describe("Test Get pet by id", () => {
    test("Get pet by valid id", async () => {
        const validID = 15;
        rp_log(`
    /**
     * Set your request
     * Provide your valid id
     * Send Get request
    */
    `)
        info(`Get pet with valid id`);
        const getPetByValidIdRes = await api.petStore.client.getPets.getPetByID(validID);
        info(`Assert response status code`);
        expect(getPetByValidIdRes.status).toEqual(200);
        info(`Assert that returned pet has id = ${validID}`);
        expect(getPetByValidIdRes.data.id).toEqual(validID);
        info(`All tests passed`);
    });
    test("Get pet by invalid id", async () => {
        const invalidID = 12345;
        rp_log(`
    /**
     * Set your request
     * Provide your invalid id
     * Send Get request
    */
    `)
        info(`Get pet with invalid id`);
        const getPetByValidIdRes = await api.petStore.client.getPets.getPetByID(invalidID);
        info(`Assert response status code`);
        expect(getPetByValidIdRes.status).toEqual(404);
        info(`Assert on returned error mesage`);
        expect(getPetByValidIdRes.data.message).toEqual("Pet not found");
        info(`All tests passed`);
    });
});