import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientComponent } from './patient/patient.component';
import { TableComponent } from './table/table.component';
import { VoteTakerComponent } from './vote-taker/vote-taker.component';
import { FormsComponent } from './forms/forms.component';
import { CountdownParentComponent } from './countdown-parent/countdown-parent.component';

export const appRoutes: Routes = [
  { path: 'patient', component: PatientComponent },
  { path: '', redirectTo: '/patient', pathMatch: 'full'},
  // { path: '**', component: PageNotFoundComponent }
  { path: 'table', component: TableComponent },
  { path: 'vote-taker', component: VoteTakerComponent},
  { path: 'forms', component: FormsComponent},
  { path: 'countdown', component: CountdownParentComponent}
]
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
