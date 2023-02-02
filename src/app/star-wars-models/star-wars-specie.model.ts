import {getIdFromUrl} from "../utils";

export class Specie {
  public name: string;
  public classification: string;
  public designation: string;
  public average_height: string;
  public skin_colors: string;
  public hair_colors: string;
  public eye_colors: string;
  public average_lifespan: string;
  public homeworld: string;
  public language: string;
  public people: string[];
  public films: string[];
  public created: string;
  public edited: string;
  public url: string;
  public id: string;

  constructor(specieData: any = {}) {
    this.name = specieData.name;
    this.classification = specieData.classification;
    this.designation = specieData.designation;
    this.average_height = specieData.average_height;
    this.skin_colors = specieData.skin_colors;
    this.hair_colors = specieData.hair_colors;
    this.eye_colors = specieData.eye_colors;
    this.average_lifespan = specieData.average_lifespan;
    this.url = specieData.url;
    this.id = getIdFromUrl(specieData.url);
  }
}
