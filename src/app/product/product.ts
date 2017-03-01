export class Product {
  constructor(
    public id: string | number,
    public price: number,
    public imageThumbUrl: string,
    public imageUrl: string) {
  }

  private _name: string = "";
  get name(): string {
    return "Product:" + this.id;
  }
}


export class ProductListItem {
  constructor(
    public product: Product,
    public itemCount: number) {
  }
}


