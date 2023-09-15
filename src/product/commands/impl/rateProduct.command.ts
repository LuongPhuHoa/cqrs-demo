export class RateProductCommand {
  constructor(
    public readonly userId: number,
    public readonly productId: number,
    public readonly rating: number,
  ) {}
}
