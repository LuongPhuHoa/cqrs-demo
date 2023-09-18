import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { AddToInvCommand } from '../impl';
import { ProductRepository } from '../../repository/product.repository';

@CommandHandler(AddToInvCommand)
export class AddToInvHandler implements ICommandHandler<AddToInvCommand> {
  constructor(
    private readonly repository: ProductRepository,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: AddToInvCommand) {
    const { productId, userId, quantity } = command;
    const product = this.publisher.mergeObjectContext(
      await this.repository.findOne(productId),
    );
    product.addToInv(userId, productId, quantity);
    console.log(
      `Product ${productId} added to inventory by user ${userId} with ${quantity} quantity`,
    );
    product.commit();
  }
}
