import { AxiosResponse } from "axios";
import { GetPets } from "../client/getPets";
let jp = require("jsonpath");

export class GetPetsActions {
    private getPetsActions = new GetPets();
    async getPetsStatus(params: object) {
        const getPetsStatusRes: AxiosResponse =
            await this.getPetsActions.getPetsByStatus(params);
        if (getPetsStatusRes.status === 200) {
            const petsStatus: Array<string> = jp.query(
                getPetsStatusRes.data,
                "$..[*].status"
            );
            return [petsStatus];
        }
        throw `Can't find pets status`;
    }
}