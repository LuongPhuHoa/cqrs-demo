import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { AddProductEvent } from '../impl';

@EventsHandler(AddProductEvent)
export class AddProductEventHandler implements IEventHandler<AddProductEvent> {
  handle(event: AddProductEvent) {
    console.log(event);
  }
}
