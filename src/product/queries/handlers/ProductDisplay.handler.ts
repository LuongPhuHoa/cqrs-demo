import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InventoryDisplayQuery } from '../impl/InventoryDisplay.query';
import { ProductRepository } from 'src/product/repository/product.repository';

@QueryHandler(InventoryDisplayQuery)
export class ProductDisplayHandler
  implements IQueryHandler<InventoryDisplayQuery>
{
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(query: InventoryDisplayQuery) {
    console.log('InventoryDisplayHandler.execute()');
    return this.productRepository.findOne(query.id);
  }
}
