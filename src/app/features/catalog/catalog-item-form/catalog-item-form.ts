import { Component, inject, Input } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../../../core/services/product.service';
import { AsyncPipe } from '@angular/common';
import { map, Observable, of } from 'rxjs';
import { OPTION_CONFIG, OptionEntry, OptionKey, ProductOptions } from '../../../core/models/product.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { KelSelect } from '../../../shared/kel-select/kel-select';
import { KelCheckbox } from '../../../shared/kel-checkbox/kel-checkbox';

@Component({
  selector: 'app-catalog-item-form',
  imports: [
    KelSelect,
    KelCheckbox,
    AsyncPipe,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule
  ],
  templateUrl: './catalog-item-form.html',
  styleUrl: './catalog-item-form.scss',
})
export class CatalogItemForm {
  @Input({ required: true }) form!: FormGroup;
  @Input({ required: true }) id!: string;
  
  private readonly productService = inject(ProductService);

  fields$: Observable<OptionEntry[]> = of();

  ngOnInit(): void {
    this.form.addControl('notes', new FormControl(''));    
    this.fields$ = this.productService.getProduct(this.id).pipe(
      map(product => {
        if (!product?.options) { return []; }
        const fields:OptionEntry[] = Object.entries(product.options).map(([key, values]) => ({
          key: key as keyof ProductOptions,
          values,
          config: OPTION_CONFIG[key as OptionKey]
        }));

        //Dynamic formControls for default
        fields.forEach(item => {
          if (!this.form.contains(item.key)) {
            if (item.config.type === 'text' || item.config.type === 'select') {
              this.form.addControl(item.key, new FormControl(''));
            }
          };
        });
        return fields;
      })
    );
  }
} 
