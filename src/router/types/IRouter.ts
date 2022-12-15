export interface IRouterItem {
    path: string;
    name: string;
}

export type IRouteURL = {
    url: string;  
    data: unknown;
}

export interface IRouter {
    name: string;
    routers: Array<IRouterItem>;
    push(props: IRouteURL | null, e: MouseEvent): void;
    init(root: HTMLElement): void;
    activateLinks(): void;
    getCurrentRouter(): IRouterItem | undefined;
}
