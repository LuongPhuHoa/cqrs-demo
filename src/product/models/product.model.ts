import { AggregateRoot } from '@nestjs/cqrs';

export class Product extends AggregateRoot {
  constructor(private readonly _id: number) {
    super();
  }

  public get id(): number {
    return this._id;
  }

  public addProduct(productId: number) {}

  public addToInv(userId: number, productID: number, quantity: number) {}

  public rate(userId: number, productId: number, rating: number) {}
}
