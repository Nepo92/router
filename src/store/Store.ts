import { IContext } from "../app/types/IApp";
import { IStore } from "./types/IStore";

class Store implements IStore {
    name = '$store';
    context = {} as IContext;
    required = [] as Array<string>;
    
    constructor() {
        this.init = this.init;
        this.get = this.get;
    }

    init(context: IContext) {
        this.context = context;
    }

    get(required: Array<string>) {
        this.required = required;
    }
}

export default Store;