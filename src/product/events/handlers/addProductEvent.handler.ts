import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { AddProductEvent } from '../impl/addProductEvent.event';

@EventsHandler(AddProductEvent)
export class AddProductEventHandler implements IEventHandler<AddProductEvent> {
  handle(event: AddProductEvent) {
    console.log('AddProductEvent', event);
  }
}
