import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ProductDisplayQuery } from '../impl/ProductDisplay.query';
import { ProductRepository } from 'src/product/repository/product.repository';

@QueryHandler(ProductDisplayQuery)
export class ProductDisplayHandler
  implements IQueryHandler<ProductDisplayQuery>
{
  constructor(private readonly repository: ProductRepository) {}

  async execute(query: ProductDisplayQuery) {
    const { id } = query;
    console.log(`Product ${id} displayed`);
    return this.repository.findOne(id);
  }
}
