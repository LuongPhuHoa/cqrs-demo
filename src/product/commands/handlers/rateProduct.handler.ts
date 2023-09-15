import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { RateProductCommand } from '../impl';
import { ProductRepository } from '../../repository/product.repository';

@CommandHandler(RateProductCommand)
export class RateProductHandler implements ICommandHandler<RateProductCommand> {
  constructor(
    private readonly repository: ProductRepository,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: RateProductCommand) {
    const { productId, userId, rating } = command;
    const product = this.publisher.mergeObjectContext(
      await this.repository.findOne(productId),
    );
    product.rate(userId, productId, rating);
    console.log(
      `Product ${productId} rated by user ${userId} with ${rating} stars`,
    );
    product.commit();
  }
}
