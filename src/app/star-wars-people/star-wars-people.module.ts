import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StarWarsPeopleListComponent} from './star-wars-people-list/star-wars-people-list.component';
import {MatCardModule} from "@angular/material/card";
import {StarWarsPeopleDetailComponent} from './star-wars-people-detail/star-wars-people-detail.component';
import {StarWarsPeopleRoutingModule} from "./star-wars-people-routing.module";
import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from "@angular/material/tooltip";
import { InfiniteScrollModule } from 'ngx-infinite-scroll' ;
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    StarWarsPeopleListComponent,
    StarWarsPeopleDetailComponent
  ],
    imports: [
        CommonModule,
        MatCardModule,
        StarWarsPeopleRoutingModule,
        InfiniteScrollModule,
        MatButtonModule,
        MatTooltipModule,
        MatProgressSpinnerModule,
        MatIconModule,
    ]
})
export class StarWarsPeopleModule {

}
