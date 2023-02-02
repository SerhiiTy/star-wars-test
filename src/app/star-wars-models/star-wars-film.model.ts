import {getIdFromUrl} from "../utils";

export class Film {
  public title: string;
  public episode_id: number;
  public opening_crawl: string;
  public director: string;
  public producer: string;
  public release_date: string;
  public characters: string[];
  public planets: string[];
  public starships: string[];
  public vehicles: string[];
  public species: string[];
  public created: string;
  public edited: string;
  public url: string;
  public id: string;

  constructor(filmData: any = {}) {
    this.title = filmData.title;
    this.episode_id = filmData.episode_id;
    this.opening_crawl = filmData.opening_crawl;
    this.director = filmData.director;
    this.producer = filmData.producer;
    this.release_date = filmData.release_date;
    this.url = filmData.url;
    this.id = getIdFromUrl(filmData.url);
  }
}
