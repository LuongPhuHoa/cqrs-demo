import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { RateProductEvent } from '../impl';

@EventsHandler(RateProductEvent)
export class RateProductEventHandler
  implements IEventHandler<RateProductEvent>
{
  handle(event: RateProductEvent) {
    console.log('RateProductEvent', event);
  }
}
