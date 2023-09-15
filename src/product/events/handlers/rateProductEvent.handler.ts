import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { RateProductEvent } from '../impl/rateProductEvent.event';

@EventsHandler(RateProductEvent)
export class RateProductEventHandler
  implements IEventHandler<RateProductEvent>
{
  handle(event: RateProductEvent) {
    console.log('RateProductEvent', event);
  }
}
