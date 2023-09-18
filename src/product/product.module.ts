import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { ProductRepository } from './repository/product.repository';
import { ProductCommandHandlers } from './commands/handlers';
import { ProductQueryHandlers } from './queries/handlers';
import { ProductEventHandlers } from './events/handlers';

@Module({
  imports: [CqrsModule],
  controllers: [ProductController],
  providers: [
    ProductRepository,
    ...ProductCommandHandlers,
    ...ProductQueryHandlers,
    ...ProductEventHandlers,
  ],
})
export class ProductModule {}
