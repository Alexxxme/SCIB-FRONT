import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { CandidateService } from '../../../services/candidate.service';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-candidates-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    TranslateModule,
    CommonModule
  ],
  templateUrl: './candidates-form.component.html',
  styleUrl: './candidates-form.component.scss'
})
export class CandidatesFormComponent {
  candidateForm: FormGroup;
  excelFile: File | null = null;

  constructor(
    private fb: FormBuilder,
    private readonly candidateService: CandidateService
  )
  {
    this.candidateForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      excel: [null, Validators.required],
    });
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input?.files?.length) {
      this.excelFile = input.files[0];
      this.candidateForm.patchValue({ excel: this.excelFile });
    }
  }

  onSubmit() {
    if (this.candidateForm.valid && this.excelFile) {
      const formData = new FormData();
      formData.append('name', this.candidateForm.get('name')?.value);
      formData.append('surname', this.candidateForm.get('surname')?.value);
      formData.append('file', this.excelFile);
  
      this.candidateService.submitCandidate(formData).subscribe({
        next: (response) => {
          this.candidateService.saveAndRedirect(response);
        },
        error: (err) => {
          console.error('Error al enviar candidato:', err);
        }
      });
    }
  }  
}
