import {Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-codes',
  templateUrl: './add-codes.component.html',
  styles: [
  ]
})
export class AddCodesComponent implements OnInit {
  @Output() codes = new EventEmitter<string[]>();
  msnt = 'Debe ser una serie de 8 dígitos comprendidos del 0-9 o bien una serie de 8 dígitos comprendidos de 0-9 separados por puntos';
  searchForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.searchForm = this.formBuilder.group({
      code: ['', Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.pattern('^((([0-9]{8})|([0-9]{3}.[0-9]{3}.[0-9]{2}))([, ]*))*$')
      ])
      ]
    });
  }

  keyPress(event: any) {
    const pattern = /[0-9.,\+\-\ ]/;

    const inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  search(){
    const controls = this.searchForm.controls;
    let a: string[] = controls.code.value.split(',');
    a.forEach(
      (currentValue, index) => {
        a[index] = currentValue.trim().replace(/[.]/gi, '');
      });
    this.codes.emit(a);
  }

  isControlHasError(controlName: string, validationType: string): boolean {
    const control = this.searchForm.controls[controlName];
    if (!control) {
      return false;
    }

    const result =
      control.hasError(validationType) &&
      (control.dirty || control.touched);
    return result;
  }
}
