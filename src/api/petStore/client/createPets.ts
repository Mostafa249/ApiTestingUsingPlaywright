import { Base } from "./base";

export class CreatePets extends Base {
    public createPet(payload: object) {
        return this.request({
            method: "post",
            url: "/pet",
            data: {
                ...payload
            }
        });
    }
}