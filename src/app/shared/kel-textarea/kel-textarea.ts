import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-kel-textarea',
  imports: [ReactiveFormsModule],
  templateUrl: './kel-textarea.html',
  styleUrl: './kel-textarea.scss',
})
export class KelTextarea {
  @Input({ required: true })  form!: FormGroup;
}
