import { Component, signal } from '@angular/core';
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

  jsonErrorMessage = signal<string | null>(null);

  obj!: any[];

  onAdd() { }

  onCancel() { }

  onSubmit(e: any) {
    console.log(e)
    console.log(this.form)
  }

  onPaste() {
    try {
      this.jsonErrorMessage.set(null);
      let jsonObject;
      if (this.form.value.data) {
        jsonObject = JSON.parse(this.form.value.data);
      }
      this.keys = Object.keys(jsonObject[0]);
      this.obj = jsonObject;
      const totalArr = [];
      const totalVal = [];
      for (let element of jsonObject) {
        const arr = [];
        const val = [];
        arr.push(...Object.entries(element));
        totalArr.push(arr);
        val.push(...Object.values(element));
        totalVal.push(val);
      }
      this.rowDataArray = totalArr;
      this.valuesArr = totalVal;
      console.log(this.obj)
    } catch (e) {
      this.jsonErrorMessage.set("Invalid JSON format. Please correct it.");
    }

  }

  validateJSON(jsonString: string): boolean {
    try {
      JSON.parse(jsonString);
      return true;
    } catch (error) {
      return false;
    }
  }

}
