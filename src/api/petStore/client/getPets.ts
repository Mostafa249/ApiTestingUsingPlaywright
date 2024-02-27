import { Base } from "./base";

export class GetPets extends Base {
    public getPetsByStatus(params?: object) {
        return this.request({
            method: "get",
            url: "/pet/findByStatus",
            params: {
                ...params
            }
        });
    }
    public getPetByID(petID: number) {
        return this.request({
            method: "get",
            url: `/pet/${petID}`,
        });
    }
}