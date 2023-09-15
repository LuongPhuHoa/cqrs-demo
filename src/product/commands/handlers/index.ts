import { AddProductHandler } from './addProduct.handler';
import { AddToInvHandler } from './addToInv.handler';
import { RateProductHandler } from './rateProduct.handler';

export const ProductCommandHandlers = [
  AddProductHandler,
  AddToInvHandler,
  RateProductHandler,
];
