import { FabioExampleService } from './services/fabio-example.service';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-fabio-example',
  templateUrl: './fabio-example.component.html',
  styleUrls: ['./fabio-example.component.scss']
})
export class FabioExampleComponent implements OnInit {

  public formGroup: FormGroup;
  public dataSource: MatTableDataSource<any>;
  public displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'acao'];

  constructor(
    private fb: FormBuilder,
    private fabioExampleService: FabioExampleService
  ) { }

  ngOnInit() {
    this.fabioExampleService.getList().subscribe(valueList => {
      this.initForm(valueList);
    })
  }

  private initForm(valueList) {
    this.formGroup = this.fb.group({
      formArrays: this.fb.array([])
    })
    const array = this.formGroup.get('formArrays') as FormArray;
    valueList.forEach(element => {
      array.push(this.createFormGroup(element));
    });
    this.dataSource = new MatTableDataSource(this.formGroup.value.formArrays);
  }

  private createFormGroup(value) {
    return this.fb.group({
      position: [value.position],
      name: [value.name],
      weight: [value.weight],
      symbol: [value.symbol]
    });
  }

  getFormGroupByIndex(index: number): FormGroup {
    const form = this.formGroup.get('formArrays') as FormGroup;
    return form.controls[index] as FormGroup;
  }

  addNewItemHandler() {
    const array = this.formGroup.get('formArrays') as FormArray;
    array.push(this.createFormGroup({}));
    this.dataSource = new MatTableDataSource(this.formGroup.value.formArrays);
  }

  confirmButtonHandler(index) {
    this.getFormGroupByIndex(index).markAsPristine();
  }

  cancelButtonHandler(index) {
    this.getFormGroupByIndex(index).markAsPristine();
  }

  removeButtonHandler(index) {
    const array = this.formGroup.get('formArrays') as FormArray;
    array.removeAt(index);
    this.dataSource = new MatTableDataSource(this.formGroup.value.formArrays);
  }
}
