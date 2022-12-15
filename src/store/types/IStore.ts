import { IContext } from "../../app/types/IApp";

export interface IStore {
    name: string;
    init(context: IContext): void;
    get(data: Array<string>): void;
    required: Array<string>;
}
