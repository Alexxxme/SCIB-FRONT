import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { APP_ROUTES } from '../core/app.routes.constants';
import { environment } from '../environments/environments';

@Injectable({ providedIn: 'root' })
export class CandidateService {
  private readonly STORAGE_KEY = 'candidates';
  private candidates: any[] = [];

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.loadFromStorage();
  }

  private loadFromStorage() {
    const stored = localStorage.getItem(this.STORAGE_KEY);
    this.candidates = stored ? JSON.parse(stored) : [];
  }

  private saveToStorage() {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.candidates));
  }

  /**
   * Add a candidate
   * 
   * @param candidate 
   */
  addCandidate(candidate: any) {
    this.candidates.push(candidate);
    this.saveToStorage();
  }

  /**
   * Adds candidates
   * 
   * @param candidates 
   */
  addCandidates(candidates: any[]) {
    this.candidates.push(...candidates);
    this.saveToStorage();
  }

  /**
   * Gets the candidates
   * 
   * @returns 
   */
  getCandidates() {
    return [...this.candidates];
  }

  /**
   * Clears the candidates
   */
  clear() {
    this.candidates = [];
    localStorage.removeItem(this.STORAGE_KEY);
  }

  /**
   * 
   * 
   * @param formData 
   * @returns 
   */
  submitCandidate(formData: FormData) {
    return this.http.post<any[]>(`${environment.apiUrl}${APP_ROUTES.CANDIDATES_ADD_FILE}`, formData);
  }

  /**
   * Add the candidates and redirects to the main page
   * 
   * @param candidates 
   */
  saveAndRedirect(candidates: any[]) {
    this.addCandidates(candidates);
    this.router.navigate([`${APP_ROUTES.CANDIDATES_LIST}`]);
  }
}
