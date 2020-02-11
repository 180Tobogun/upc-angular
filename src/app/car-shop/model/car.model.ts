export class CarModel {
  id: number;
  model: string;
  price: number;
  colour: string;

  constructor(id?: number, model?: string, price?: number, colour?: string) {
    this.id = id;
    this.model = model;
    this.price = price;
    this.colour = colour;
  }
}
