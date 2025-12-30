import { Component, Input } from '@angular/core';
import { OptionEntry } from '../../core/models/product.model';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-kel-select',
  imports: [ReactiveFormsModule],
  templateUrl: './kel-select.html',
  styleUrl: './kel-select.scss',
})
export class KelSelect {
  @Input({ required: true })  field!: OptionEntry;
  @Input({ required: true })  form!: FormGroup;
}
