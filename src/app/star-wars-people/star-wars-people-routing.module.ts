import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StarWarsPeopleListComponent} from './star-wars-people-list/star-wars-people-list.component';
import {StarWarsPeopleDetailComponent} from "./star-wars-people-detail/star-wars-people-detail.component";

const routes: Routes = [
  {
    path: '',
    component: StarWarsPeopleListComponent,
    pathMatch: 'full',
  },
  {
    path: 'detail/:id',
    component: StarWarsPeopleDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StarWarsPeopleRoutingModule {}
