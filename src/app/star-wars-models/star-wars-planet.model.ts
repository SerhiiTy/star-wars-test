import {getIdFromUrl} from "../utils";

export class Planet {
  public name: string;
  public rotation_period: string;
  public orbital_period: string;
  public diameter: string;
  public climate: string;
  public gravity: string;
  public terrain: string;
  public surface_water: string;
  public population: string;
  public residents: string[];
  public films: string[];
  public created: string;
  public edited: string;
  public url: string;
  public id: string;

  constructor(planetData: any = {}) {
    this.name = planetData.name;
    this.rotation_period = planetData.rotation_period;
    this.orbital_period = planetData.orbital_period;
    this.diameter = planetData.diameter;
    this.climate = planetData.climate;
    this.gravity = planetData.gravity;
    this.terrain = planetData.terrain;
    this.surface_water = planetData.surface_water;
    this.population = planetData.population;
    this.residents = planetData.residents;
    this.films = planetData.films;
    this.url = planetData.url;
    this.id = getIdFromUrl(this.url)
  }
}
