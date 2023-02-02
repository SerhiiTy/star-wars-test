import {getIdFromUrl} from "../utils";

export class Person {
  public name: string;
  public height: string;
  public mass: string;
  public hair_color: string;
  public skin_color: string;
  public eye_color: string;
  public birth_year: string;
  public gender: string;
  public homeworld: string;
  public films: string[];
  public species: string[];
  public vehicles: string[];
  public starships: string[];
  public created: string;
  public edited: string;
  public url: string;
  public id: string;

  constructor(personData: any = {}) {
    this.name = personData.name;
    this.height = personData.height;
    this.mass = personData.mass;
    this.hair_color = personData.hair_color;
    this.skin_color = personData.skin_color;
    this.eye_color = personData.eye_color
    this.birth_year = personData.birth_year;
    this.gender = personData.gender;
    this.homeworld = personData.homeworld;
    this.films = personData.films;
    this.species = personData.species;
    this.vehicles = personData.vehicles;
    this.starships = personData.starships;
    this.created = personData.created;
    this.edited = personData.edited;
    this.url = personData.url;
    this.id = getIdFromUrl(this.url);
  }
}


