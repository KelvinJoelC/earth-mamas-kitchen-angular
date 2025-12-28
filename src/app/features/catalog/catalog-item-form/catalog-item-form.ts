import { Component, inject, Input } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../../../core/services/product.service';
import { AsyncPipe } from '@angular/common';
import { map, Observable, of } from 'rxjs';
import { Product, ProductOptions } from '../../../core/models/product.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';

type OptionEntry = {
  key: keyof ProductOptions;
  values: readonly Product[];
};

@Component({
  selector: 'app-catalog-item-form',
  imports: [
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

  fields$: Observable<OptionEntry[]> = of([]);

  ngOnInit(): void {
    this.fields$ = this.productService.getProduct(this.id).pipe(
      map(product => {
        if (!product?.options) { return []; }

        const fields = Object.entries(product.options).map(([key, values]) => ({
          key: key as keyof ProductOptions,
          values
        }));

        //Dynamic formControls
        fields.forEach(item => {
          if (!this.form.contains(item.key)) {
            if (item.key === 'addOns') {
              let addOns = new FormArray<FormControl<boolean | null>>([])
              item.values.forEach(() => {
                addOns.push(new FormControl(false));
              })
              this.form.addControl(item.key, addOns);
            } else {
              this.form.addControl(item.key, new FormControl(''));
            }
          }
        });
        return fields;
      })
    );
  }
} 
