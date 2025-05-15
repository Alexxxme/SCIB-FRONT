import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'

@Component({
  selector: 'app-candidates-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './candidates-form.component.html',
  styleUrl: './candidates-form.component.scss'
})
export class CandidatesFormComponent {
  candidateForm: FormGroup;
  excelFile: File | null = null;

  constructor(private fb: FormBuilder) {
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

      // Aquí iría la llamada al servicio
      console.log('Formulario enviado:', formData);
    }
  }
}
