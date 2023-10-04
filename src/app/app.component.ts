import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = 'projectTaco';
	isExpand: boolean = false;

	form = this.fb.group({
		name: ['', Validators.required],
		email: ['', Validators.required],
		tiff: ['monkey']
	});

	constructor(private fb: FormBuilder) {}

	onClearForm() {
		this.form.reset();
	}

	save() {
		console.log(this.form.value)
	}
}
