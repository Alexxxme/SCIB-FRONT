import { Routes } from '@angular/router';
import { CandidatesListComponent } from '../modules/candidates/candidates-list/candidates-list.component';
import { CandidatesFormComponent } from '../modules/candidates/candidates-form/candidates-form.component';

export const routes: Routes = [
  { path: '', redirectTo: 'candidates', pathMatch: 'full' },

  { path: 'candidates', component: CandidatesListComponent },

  { path: 'candidates/add', component: CandidatesFormComponent }
];
  
