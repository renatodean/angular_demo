import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Flight } from 'shared/models/flight.model';
import { Scale } from 'shared/models/scale.model';

@Injectable()
export class FlightService {
  public url: string;
  private flights: Array<Flight> = new Array<Flight>();

  constructor() {
    if (localStorage.getItem('flights')) {
      this.flights = JSON.parse(localStorage.getItem('flights'));
    } else {
      this.flights = this.getBaseFlightsArray();
    }
  }

  getFlights(): Observable<Flight[]> {
    return of(this.flights);
  }

  getFlightById(idFlight: number): Observable<Flight> {
    let i = -1;
    this.flights.forEach((element, index) => {
      if (element.id === idFlight) {
        i = index;
      }
    });
    if (i !== -1) {
      return of(this.flights[i]);
    } else {
      return of(null);
    }
  }

  createFlight(flight: Flight): Observable<Flight> {
    try {
      if (flight.id) {
        const error = {
          message: 'El vuelo ya tiene ID, no se puede crear'
        };
        throw(error);
      }
      let maxId = 0;
      this.flights.forEach(element => {
        if (element.id > maxId) {
          maxId = element.id;
        }
      });
      flight.id = maxId + 1;
      this.flights.push(flight);
      this.saveFlightsToStorage();
      return of(flight);
    } catch (error) {
      throw(error);
    }
  }

  editFlight(flight: Flight): Observable<Flight> {
    try {
      if (!flight.id) {
        const error = {
          message: 'El vuelo no tiene ID, no se puede editar'
        };
        throw(error);
      }
      this.flights.forEach(element => {
        if (element.id === flight.id) {
          element = flight;
        }
      });
      this.saveFlightsToStorage();
      return of(flight);
    } catch (error) {
      throw(error);
    }
  }

  deleteFlight(idFlight: number): Observable<boolean> {
    try {
      if (!idFlight) {
        const error = {
          message: 'Debe enviar un parametro para poder borrar'
        };
        throw(error);
      }
      let i = -1;
      this.flights.forEach((element, index) => {
        if (element.id === idFlight) {
          i = index;
        }
      });
      if (i !== -1) {
        this.flights.splice(i, 1);
        this.saveFlightsToStorage();
        return of(true);
      } else {
        return of(false);
      }
    } catch (error) {
      throw(error);
    }
  }

  saveFlightsToStorage() {
    localStorage.setItem('flights', JSON.stringify(this.flights));
  }

  getBaseFlightsArray() {
    const response = [];
    let flight = new Flight();
    flight.id = 1;
    flight.origin = 'Argentina';
    flight.destiny = 'Brasil';
    flight.scales = [];
    flight.departureDate = new Date();
    let arrivalDate = new Date();
    arrivalDate.setDate(arrivalDate.getDate() + 2);
    flight.arrivalDate = arrivalDate;
    flight.price = 5000;
    flight.duration = 48;
    response.push(flight);
    flight = new Flight();
    flight.id = 2;
    flight.origin = 'Argentina';
    flight.destiny = 'Noruega';
    flight.scales = [];
    let scale = new Scale();
    scale.origin = 'Argentina';
    scale.destiny = 'España';
    scale.dutation = 20;
    scale.plainNumber = 24;
    flight.scales.push(scale);
    scale = new Scale();
    scale.origin = 'España';
    scale.destiny = 'Noruega';
    scale.dutation = 6;
    scale.plainNumber = 28;
    flight.scales.push(scale);
    flight.departureDate = new Date();
    arrivalDate = new Date();
    arrivalDate.setDate(arrivalDate.getDate() + 2);
    flight.arrivalDate = arrivalDate;
    flight.price = 5000;
    flight.duration = 48;
    response.push(flight);
    console.log(response);
    return response;
  }

}

