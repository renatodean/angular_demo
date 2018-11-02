export class Product {
  id: number;
  name: string;
  stock: number;
  detalle: string;
  importada: boolean;
  origen: string;
  constructor() {
    this.id = undefined;
    this.name = undefined;
    this.stock = undefined;
    this.detalle = undefined;
    this.importada = undefined;
    this.origen = undefined;
  }
}
