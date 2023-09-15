import { Injectable } from '@nestjs/common';
import { Product } from '../models/product.model';

@Injectable()
export class ProductRepository {
  private readonly Products: Product[] = [];

  async create(id: number): Promise<Product> {
    const NewProduct = new Product(id);
    this.Products.push(NewProduct);
    return NewProduct;
  }

  async findOne(id: number): Promise<Product> {
    return this.Products.find((Product) => Product.id === id);
  }

  async findAll(): Promise<Product[]> {
    return this.Products;
  }
}
