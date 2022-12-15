export interface IAppModule {
    init(root: HTMLElement): void;
    name: string;
}

export interface IApp {
    use(module: IAppModule): void;
    start(root: HTMLElement): void;
}