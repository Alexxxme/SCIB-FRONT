import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CandidateService {
  private candidates: any[] = [];

  addCandidate(candidate: any) {
    this.candidates.push(candidate);
  }

  getCandidates() {
    return this.candidates;
  }

  clear() {
    this.candidates = [];
  }
}
