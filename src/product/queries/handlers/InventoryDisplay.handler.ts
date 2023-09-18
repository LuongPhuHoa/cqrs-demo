import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InventoryDisplayQuery } from '../impl/InventoryDisplay.query';
import { ProductRepository } from 'src/product/repository/product.repository';

@QueryHandler(InventoryDisplayQuery)
export class InventoryDisplayHandler
  implements IQueryHandler<InventoryDisplayQuery>
{
  constructor(private readonly productRepository: ProductRepository) {}

  async execute() {
    console.log('InventoryDisplayHandler.execute()');
    return this.productRepository.findAll();
  }
}
