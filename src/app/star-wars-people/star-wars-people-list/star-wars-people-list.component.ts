import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {DataService} from "../../services/data.service";
import {Person} from "../../star-wars-models/star-wars-person.model";
import {take} from "rxjs";
import {RouterStateService} from "../../services/router-state.service";


@Component({
  selector: 'app-star-wars-people-list',
  templateUrl: './star-wars-people-list.component.html',
  styleUrls: ['./star-wars-people-list.component.scss']
})
export class StarWarsPeopleListComponent implements OnInit{
  public people: Person[] = [];
  public nextPage: number;
  public spinnerLoading: boolean = false;

  constructor(
    private router: Router,
    private dataService: DataService,
    private routerStateService: RouterStateService,
  ) {
  }

  public onScroll(): void {
    if (this.nextPage) {
      this.spinnerLoading = true;
      this.dataService.getPeopleData(this.nextPage).subscribe((peopleData) => {
        this.people.push(...peopleData.data);
        this.nextPage = peopleData.nextPage;
        this.spinnerLoading = false;
      });
    }
  }

  public ngOnInit(): void {
    this.getPeopleData();
  }

  public navigateToDetail(person: Person): void {
    this.routerStateService.setOpenedPerson(person.id, person);
    void this.router.navigate(['detail', person.id], {state: {person}});
  }

  private getPeopleData(page: number = 1): void {
    this.dataService.getPeopleData(page).pipe(
      take(1),
    ).subscribe(peopleData => {
      this.people = peopleData.data;
      this.nextPage = peopleData.nextPage;
    });
  }
}
