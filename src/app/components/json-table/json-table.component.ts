import { Component } from '@angular/core';
import { NavComponent } from "../nav/nav.component";
import { UpperCasePipe } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-json-table',
  standalone: true,
  imports: [NavComponent, UpperCasePipe, ReactiveFormsModule, PaginatorModule, TableModule],
  templateUrl: './json-table.component.html',
  styleUrl: './json-table.component.scss'
})
export class JsonTableComponent {

  form = new FormGroup({
    data: new FormControl(undefined, {
      validators: [
        Validators.required
      ]
    }),
  });

  keys: string[] = [];

  valuesArr!: any[];

  rowDataArray!: any[];

  onAdd() { }

  onCancel() { }

  onSubmit() { }

  onChange() {
    let jsonObject
    if (this.form.value.data) {
      jsonObject = JSON.parse(this.form.value.data);
    }
    this.keys = Object.keys(jsonObject[0]);
    const totalArr = [];
    for (let element of jsonObject) {
      const arr = [];
      arr.push(...Object.values(element))
      console.log(arr);
      totalArr.push(arr);
      // this.rowDataArray.push(arr);
      // console.log(this.rowDataArray)
      // let data = Object.values(element);
      // console.log(data)
      // this.valuesArr.push(data);
      // console.log(this.valuesArr)
    }
    this.rowDataArray = totalArr
    console.log(this.rowDataArray);

  }
}
