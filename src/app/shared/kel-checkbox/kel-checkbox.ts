import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { OptionEntry } from '../../core/models/product.model';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-kel-checkbox',
  imports: [ReactiveFormsModule, MatCheckboxModule],
  templateUrl: './kel-checkbox.html',
  styleUrl: './kel-checkbox.scss',
})
export class KelCheckbox {
  @Input({ required: true })  field!: OptionEntry;
  @Input({ required: true })  form!: FormGroup;

  ngOnInit(): void {
            console.log('Adding control for value:', this.field.key);

    if (!this.form.contains(this.field.key)) {
      const group = new FormGroup({});
      

      this.field.values.forEach(value => {
        group.addControl( value.toString(), new FormControl(false));
      });

      this.form.addControl(this.field.key, group);
    }
  }
}
