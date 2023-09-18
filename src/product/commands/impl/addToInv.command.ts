export class AddToInvCommand {
  constructor(
    public readonly userId: number,
    public readonly productId: number,
    public readonly quantity: number,
    public readonly inventoryId: number,
  ) {}
}
