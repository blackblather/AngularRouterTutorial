import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrisesCenterRoutingModule } from './crisis-center-routing.module';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { CrisisCenterHomeComponent } from './crisis-center-home/crisis-center-home.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CrisisDetailComponent,
    CrisisListComponent,
    CrisisCenterComponent,
    CrisisCenterHomeComponent
  ],
  imports: [
    CommonModule,
    CrisesCenterRoutingModule,
    FormsModule
  ]
})
export class CrisisCenterModule { }
