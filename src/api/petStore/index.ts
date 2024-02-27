import { GetPets } from "./client/getPets";
import { GetPetsActions } from "./action/getPetsActions";
import { CreatePets } from "./client/createPets";

class Client {
    public getPets: GetPets = new GetPets();
    public createPets: CreatePets = new CreatePets();
}
class Action {
    public getPetsActions: GetPetsActions = new GetPetsActions();
}

export class petStore {
    public client = new Client();
    public action = new Action();
}