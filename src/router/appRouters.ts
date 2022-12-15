import { IRouterItem } from "./types/IRouter";

export default [
    { path: '/', name: 'main' },
    { path: '/basket', name: 'basket' },
    { path: '/product', name: 'product' },
    { path: 404, name: 'error' },
] as Array<IRouterItem>;
