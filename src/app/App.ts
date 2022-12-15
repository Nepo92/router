import { IAppModule, IApp } from "./types/IApp";

class App implements IApp {
    modules = [] as Array<IAppModule>;

    use(module: IAppModule) {
        const moduleItem = {...module};

        // this[moduleItem.name] = moduleItem;
        this.modules.push(moduleItem);
    }

    async start(root: HTMLElement) {
        this.modules.forEach((item) => item.init(root));
    }
}

export default App;
