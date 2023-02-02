import {getIdFromUrl} from "../utils";

export class Vehicle {
  public name: string;
  public model: string;
  public manufacturer: string;
  public cost_in_credits: string;
  public length: string;
  public max_atmosphering_speed: string;
  public crew: string;
  public passengers: string;
  public cargo_capacity: string;
  public consumables: string;
  public vehicle_class: string;
  public pilots: string[];
  public films: string[];
  public created: string;
  public edited: string;
  public url: string;
  public id: string;

  constructor(vehicleData: any = {}) {
    this.name = vehicleData.name;
    this.model = vehicleData.model;
    this.manufacturer = vehicleData.manufacturer;
    this.cost_in_credits = vehicleData.cost_in_credits;
    this.length = vehicleData.length;
    this.max_atmosphering_speed = vehicleData.max_atmosphering_speed;
    this.crew = vehicleData.crew;
    this.passengers = vehicleData.passengers;
    this.cargo_capacity = vehicleData.cargo_capacity;
    this.consumables = vehicleData.consumables;
    this.vehicle_class = vehicleData.vehicle_class;
    this.id = getIdFromUrl(vehicleData.url);
  }
}
