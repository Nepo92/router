import { IContext } from "../app/types/IApp";

class Controller {
  init(context: IContext) {
    this.dispatchData(context);
  }

  dispatchData(context: IContext) {
    const { $store } = context;
    const { name } = context.router;
    
    const currentData = this.getData.find((el) => el.name === name);

    if (currentData) {
      $store.get(currentData.data);
    }
  }

  get getData() {
    return [
      {
        name: 'main',
        data: ['products', 'basket'],
      },
      {
        name: 'cart',
        data: ['basket'],
      },
      {
        name: 'product',
        data: ['product'],
      }
    ]
  }
}

export default Controller;
