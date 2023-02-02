import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from "@angular/common";
import {Person} from "../../star-wars-models/star-wars-person.model";
import {RouterStateService} from "../../services/router-state.service";
import {DataService} from "../../services/data.service";
import {getIdFromUrl} from "../../utils";
import {Observable, share, switchMap, of, forkJoin} from "rxjs";
import {Planet} from "../../star-wars-models/star-wars-planet.model";
import {Film} from "../../star-wars-models/star-wars-film.model";
import {Specie} from "../../star-wars-models/star-wars-specie.model";
import {Starship} from "../../star-wars-models/star-wars-starship.model";
import {Vehicle} from "../../star-wars-models/star-wars-vehicle.model";

@Component({
  selector: 'app-star-wars-people-detail',
  templateUrl: './star-wars-people-detail.component.html',
  styleUrls: ['./star-wars-people-detail.component.scss']
})
export class StarWarsPeopleDetailComponent implements OnInit {
  public person$: Observable<Person>;
  public planet$: Observable<Planet>;
  public films$: Observable<Film[]>;
  public species$: Observable<Specie[]>;
  public starships$: Observable<Starship[]>;
  public vehicles$: Observable<Vehicle[]>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private routerStateService: RouterStateService,
    private dataService: DataService,
  ) {

  }

  ngOnInit(): void {
    const personId = this.route.snapshot.params['id'];
    this.person$ = this.getPerson(personId);
    this.planet$ = this.getPlanet();
    this.films$ = this.getFilms();
    this.species$ = this.getSpecies();
    this.starships$ = this.getStarship();
    this.vehicles$ = this.getVehicles();
  }

  public back(): void {
    void this.router.navigate(['../']);
  }

  private getPerson(id: string): Observable<Person> {
    return this.routerStateService.getOpenedPerson(id).pipe(
      share(),
    );
  }

  private getPlanet(): Observable<Planet> {
    return this.person$.pipe(
      switchMap((person: Person) => {
        if (!person.homeworld) {
          return of(null);
        }

        const planetId = getIdFromUrl(person.homeworld);
        return this.dataService.getPlanet(planetId);
      })
    );
  }

  private getFilms(): Observable<Film[]> {
    return this.person$.pipe(
      switchMap((person: Person) => {
        const films: any[] = [];
        if (!person.films) {
          films.push(of(null));
          return films;
        }
        const filmIds = person.films.map(el => {
          return getIdFromUrl(el);
        });
        filmIds.forEach(el => {
          const film = this.dataService.getFilm(el);
          films.push(film);
        });
        return forkJoin(films);
      })
    );
  }

  private getSpecies(): Observable<Specie[]> {
    return this.person$.pipe(
      switchMap((person: Person) => {
        const species: any[] = [];
        if (!person.species) {
          species.push(of(null));
          return species;
        }
        const speciesIds = person.species.map(el => {
          return getIdFromUrl(el);
        });
        speciesIds.forEach(el => {
          const specie = this.dataService.getSpecie(el);
          species.push(specie);
        });
        return forkJoin(species);
      })
    );
  }

  private getStarship(): Observable<Starship[]> {
    return this.person$.pipe(
      switchMap((person: Person) => {
        const starships: any[] = [];
        if (!person.starships) {
          starships.push(of(null));
          return starships;
        }
        const starshipIds = person.starships.map(el => {
          return getIdFromUrl(el);
        });
        starshipIds.forEach(el => {
          const starship = this.dataService.getStarship(el);
          starships.push(starship);
        });
        return forkJoin(starships);
      })
    );
  }

  private getVehicles(): Observable<Vehicle[]> {
    return this.person$.pipe(
      switchMap((person: Person) => {
        const vehicles: any[] = [];
        if (!person.vehicles) {
          vehicles.push(of(null));
          return vehicles;
        }
        const vehicleIds = person.vehicles.map(el => {
          return getIdFromUrl(el);
        });
        vehicleIds.forEach(el => {
          const vehicle = this.dataService.getVehicle(el);
          vehicles.push(vehicle);
        });
        return forkJoin(vehicles);
      })
    );
  }
}
