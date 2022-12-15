import Controller from '../components/controller/controller';
import Utils from '../utils/Utils';
import { IRouter, IRouterItem, IRouteURL } from './types/IRouter';

const utils = new Utils();
const controller = new Controller();

class Router implements IRouter {
    name = '$router';
    routers = [] as Array<IRouterItem>;

    constructor(routers: Array<IRouterItem>) {
        this.routers = [...routers];
        this.push = this.push;
        this.init = this.init;
        this.activateLinks = this.activateLinks;
        this.getCurrentRouter = this.getCurrentRouter;

        const init = this.init.bind(this, null);

        window.addEventListener('popstate', init);
    };

    init(root: HTMLElement | null) {
        const currentRouter = this.getCurrentRouter();

        controller.init(currentRouter as IRouterItem);

        this.activateLinks();
    };

    push(pushProps: IRouteURL | null, e: MouseEvent) {
        let address = '';
        let data = {} as unknown;

        console.log('push')

        if (pushProps) {
            const {url, data} = pushProps;
            address = url;
        } else {
            address = (e.target as HTMLElement).getAttribute('data-href') as string;
        }

        const pathname = utils.getPathName();

        if (pathname !== address) {
            globalThis.history.pushState(data, '', address);
            this.init(null);
        } else {
            window.location.reload();
        }
    };

    activateLinks() {
        const links = document.querySelectorAll('[data-href]');

        console.log(links)

        if (links.length) {
            const push = this.push.bind(this, null);

            links.forEach((item) => {
                const clone = utils.replaceItem(item as HTMLElement);

                clone.addEventListener('click', push as EventListener);
            });
        }
    }

    getCurrentRouter() {
        const pathname = utils.getPathName();

        return this.routers.find((el) => el.path === pathname);
    }
}

export default Router;
