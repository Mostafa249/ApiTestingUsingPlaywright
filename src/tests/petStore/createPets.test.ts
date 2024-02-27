import { api } from "@api/.";
import { info, rp_log } from "@utils/logger";
import { AxiosResponse } from "axios";
import { test, expect } from "playwright/test";
import { createPetWithoutName } from "./testData/petsPayloads";

test.describe("Test create neew pet", () => {
    test("test create new pet without name ", async () => {
        rp_log(`
        /**
         * Set your request
         * Provide your payload
         * Send your post request
        */
        `)
        info(`Create a pet without name `);
        const createPetWithoutNameRes: AxiosResponse = await api.petStore.client.createPets.createPet(createPetWithoutName);
        info(`Assert response satus`);
        expect(createPetWithoutNameRes.status).toEqual(200);
        info(`Assert that response doesn't contain naem`);
        expect(createPetWithoutNameRes.data.name).toBeNull;
        info("All tests passed ");
    });
});