import {getIdFromUrl} from "../utils";

export class Starship {
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
  public hyperdrive_rating: string;
  public MGLT: string;
  public starship_class: string;
  public pilots: string;
  public films: string[];
  public created: string;
  public edited: string;
  public url: string;
  public id: string;

  constructor(starshipData: any = {}) {
    this.name = starshipData.name;
    this.model = starshipData.model;
    this.manufacturer = starshipData.manufacturer;
    this.cost_in_credits = starshipData.cost_in_credits;
    this.length = starshipData.length;
    this.max_atmosphering_speed = starshipData.max_atmosphering_speed;
    this.crew = starshipData.crew;
    this.passengers = starshipData.passengers;
    this.cargo_capacity = starshipData.cargo_capacity;
    this.consumables = starshipData.consumables;
    this.hyperdrive_rating = starshipData.hyperdrive_rating;
    this.MGLT = starshipData.MGLT;
    this.starship_class = starshipData.starship_class;
    this.pilots = starshipData.pilots;
    this.url = starshipData.url;
    this.id = getIdFromUrl(starshipData.url);
  }
}
