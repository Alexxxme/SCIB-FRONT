import { Component } from '@angular/core';
import { CandidateService } from '../../../services/candidate.service';
import { MatButtonModule } from '@angular/material/button'
import { MatTableModule } from '@angular/material/table'
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-candidates-list',
  standalone: true,
  templateUrl: './candidates-list.component.html',
  styleUrls: ['./candidates-list.component.scss'],
  imports: [
    MatTableModule,
    MatButtonModule,
    RouterModule,
    CommonModule
  ]
})
export class CandidatesListComponent {
  displayedColumns: string[] = ['name', 'surname', 'seniority', 'years', 'availability'];
  candidates: any[] = [];

  constructor(private candidateService: CandidateService) {}

  ngOnInit() {
    this.candidates = this.candidateService.getCandidates();
  }
}
