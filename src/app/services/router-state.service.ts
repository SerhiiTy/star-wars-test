import { Injectable } from '@angular/core';
import {DataService} from "./data.service";
import {Observable, of} from "rxjs";
import {Person} from "../star-wars-models/star-wars-person.model";

@Injectable({
  providedIn: 'root'
})
export class RouterStateService {
  private openedPerson: {
    id: string;
    value: Person;
  };

  constructor(private dataService: DataService) { }

  public setOpenedPerson(id: string, person: Person): void {
    this.openedPerson = {
      id,
      value: person,
    };
  }

  public getOpenedPerson(id: string): Observable<Person> {
    return this.openedPerson?.id === id ? of(this.openedPerson?.value) : this.dataService.getPerson(id)
  }
}
