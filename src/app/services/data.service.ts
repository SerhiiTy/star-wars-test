import {Injectable} from '@angular/core';
import {map, Observable} from "rxjs";
import {Person} from "../star-wars-models/star-wars-person.model";
import {HttpClient} from "@angular/common/http";
import {Planet} from "../star-wars-models/star-wars-planet.model";
import {Film} from "../star-wars-models/star-wars-film.model";
import {API_URL, PagedData} from "../utils";
import {Specie} from "../star-wars-models/star-wars-specie.model";
import {Starship} from "../star-wars-models/star-wars-starship.model";
import {Vehicle} from "../star-wars-models/star-wars-vehicle.model";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  public getPerson(id: string): Observable<Person> {
    return this.http.get(`${API_URL}/people/${id}`).pipe(
      map((res: any) => new Person(res)),
    );
  }

  public getPlanet(id: string): Observable<Planet> {
    return this.http.get(`${API_URL}/planets/${id}`).pipe(
      map((res: any) => new Planet(res)),
    );
  }

  public getFilm(id: string): Observable<Film> {
    return this.http.get(`${API_URL}/films/${id}`).pipe(
      map((res: any) => new Film(res)),
    );
  }

  public getSpecie(id: string): Observable<Specie> {
    return this.http.get(`${API_URL}/species/${id}`).pipe(
      map((res: any) => new Specie(res)),
    );
  }

  public getStarship(id: string): Observable<Starship> {
    return this.http.get(`${API_URL}/starships/${id}`).pipe(
      map((res: any) => new Starship(res)),
    );
  }

  public getVehicle(id: string): Observable<Vehicle> {
    return this.http.get(`${API_URL}/vehicles/${id}`).pipe(
      map((res: any) => new Vehicle(res)),
    );
  }

  public getPeopleData(page: number = 1): Observable<PagedData<Person[]>> {
    return this.http.get(`${API_URL}/people/?page=${page}`)
      .pipe(
        map((res: any) => {
          const persons = res.results.map((person: any) => new Person(person));
          const nextPage = this.getPageFromUrl(res.next);
          const previousPage = this.getPageFromUrl(res.previous);

          return {
            nextPage,
            previousPage,
            data: persons,
          }
        }),
      );
  }

  private getPageFromUrl(url: string): number {
    const stringifiedPage = url?.split('/?page=')[1];

    return stringifiedPage ? Number(stringifiedPage): null;
  }

}
