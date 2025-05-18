import { Component } from '@angular/core';
import { CandidateService } from '../../../services/candidate.service';
import { MatButtonModule } from '@angular/material/button'
import { MatTableModule } from '@angular/material/table'
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from '../../../core/app.routes.constants';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-candidates-list',
  standalone: true,
  templateUrl: './candidates-list.component.html',
  styleUrls: ['./candidates-list.component.scss'],
  imports: [
    MatTableModule,
    MatButtonModule,
    RouterModule,
    CommonModule,
    TranslateModule
  ]
})
export class CandidatesListComponent {
  displayedColumns: string[] = ['name', 'surname', 'seniority', 'years', 'availability'];
  candidates: any[] = [];

  public readonly APP_ROUTES = APP_ROUTES;

  constructor(private candidateService: CandidateService) {}

  ngOnInit() {
    this.candidates = this.candidateService.getCandidates();
  }
}
