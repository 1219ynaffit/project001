import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'tiff-custom-form',
	templateUrl: './custom-form.component.html',
	styleUrls: ['./custom-form.component.scss'],
})
export class CustomFormComponent {
	form = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
  });

  protected getFormControl(controlName: any): FormControl {
		return this.form.get(controlName) as FormControl;
	}

	constructor(private fb: FormBuilder) {}

  onClearForm() {
    this.form.reset();
  }
}
