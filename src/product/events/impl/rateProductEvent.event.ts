export class RateProductEvent {
  constructor(
    public readonly userId: number,
    public readonly productId: number,
    public readonly rating: number,
  ) {}
}
