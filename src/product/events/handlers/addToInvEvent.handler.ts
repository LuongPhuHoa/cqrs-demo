import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { AddToInvEvent } from '../impl';

@EventsHandler(AddToInvEvent)
export class AddToInvEventHandler implements IEventHandler<AddToInvEvent> {
  handle(event: AddToInvEvent) {
    console.log('AddToInvEvent', event);
  }
}
