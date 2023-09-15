import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { AddProductCommand } from '../impl/addProduct.command';
import { ProductRepository } from '../../repository/product.repository';

@CommandHandler(AddProductCommand)
export class AddProductHandler implements ICommandHandler<AddProductCommand> {
  constructor(
    private readonly repository: ProductRepository,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: AddProductCommand) {
    const { productId } = command;
    const product = this.publisher.mergeObjectContext(
      await this.repository.create(productId),
    );
    product.addProduct(productId);
    console.log(`Product ${productId} added`);
    product.commit();
  }
}
