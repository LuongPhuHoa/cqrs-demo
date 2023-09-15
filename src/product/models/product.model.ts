import { AggregateRoot } from '@nestjs/cqrs';
import { AddProductEvent } from '../events/impl/addProductEvent.event';
import { AddToInvEvent } from '../events/impl/addToInvEvent.event';
import { RateProductEvent } from '../events/impl/rateProductEvent.event';

export class Product extends AggregateRoot {
  constructor(private readonly _id: number) {
    super();
  }

  public get id(): number {
    return this._id;
  }

  public addProduct(productId: number) {
    this.apply(new AddProductEvent(productId));
  }

  public addToInv(userId: number, productID: number, quantity: number) {
    this.apply(new AddToInvEvent(userId, productID, quantity));
  }

  public rate(userId: number, productId: number, rating: number) {
    this.apply(new RateProductEvent(userId, productId, rating));
  }
}
