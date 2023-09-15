import { AddProductEventHandler } from './addProductEvent.handler';
import { AddToInvEventHandler } from './addToInvEvent.handler';
import { RateProductEventHandler } from './rateProductEvent.handler';

export const ProductEventHandlers = [
  AddProductEventHandler,
  AddToInvEventHandler,
  RateProductEventHandler,
];
