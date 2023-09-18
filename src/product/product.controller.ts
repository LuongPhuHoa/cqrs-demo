import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { AddProductCommand } from './commands/impl/addProduct.command';
import { AddToInvCommand } from './commands/impl/addToInv.command';
import { RateProductCommand } from './commands/impl/rateProduct.command';
import { InventoryDisplayQuery } from './queries/impl/inventoryDisplay.query';
import { ProductDisplayQuery } from './queries/impl/ProductDisplay.query';

@Controller()
export class ProductController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post('add')
  async addProduct(@Body() body: any): Promise<any> {
    const { productId } = body;
    return this.commandBus.execute(new AddProductCommand(productId));
  }

  @Post('add-to-inv')
  async addToInv(@Body() body: any): Promise<any> {
    const { productId, userId, quantity, inventoryId } = body;
    return this.commandBus.execute(
      new AddToInvCommand(productId, userId, quantity, inventoryId),
    );
  }

  @Post('rate')
  async rateProduct(@Body() body: any): Promise<any> {
    const { productId, userId, rating } = body;
    return this.commandBus.execute(
      new RateProductCommand(productId, userId, rating),
    );
  }

  @Get('inventory')
  async getInventory(): Promise<any> {
    return this.queryBus.execute(new InventoryDisplayQuery());
  }

  @Get('product/:id')
  async getProduct(@Param('id') id: number): Promise<any> {
    return this.queryBus.execute(new ProductDisplayQuery(id));
  }
}
