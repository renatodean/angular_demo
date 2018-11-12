import { Scale } from './scale.model';

export class Flight {
  id: number;
  origin: string;
  destiny: string;
  departureDate: Date;
  arrivalDate: Date;
  price: number;
  duration: number;
  scales: Scale[];
  constructor() {
    this.id = undefined;
    this.origin = undefined;
    this.destiny = undefined;
    this.departureDate = undefined;
    this.arrivalDate = undefined;
    this.price = undefined;
    this.scales = [];
  }
}
