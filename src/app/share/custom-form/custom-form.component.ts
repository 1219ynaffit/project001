import { Component,  forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const TIFF_CUSTOM_FORM_ACCESSOR = {
	provide: NG_VALUE_ACCESSOR,
	useExisting: forwardRef(() => CustomFormComponent),
	multi: true,
};

@Component({
	selector: 'tiff-custom-form',
	templateUrl: './custom-form.component.html',
	styleUrls: ['./custom-form.component.scss'],
	providers: [TIFF_CUSTOM_FORM_ACCESSOR],
})
export class CustomFormComponent implements ControlValueAccessor {
	list = [
		{ name: '猴子', value: 'monkey' },
		{ name: '鴿子', value: 'girzi' },
		{ name: '水哥', value: 'walter bro' },
		{ name: '詹姆士', value: 'james' },
	];
	activeValue = '';
	disabled: boolean = false;
	onChange: Function = () => {};
	onTouched: Function = () => {};

	constructor() {}

	dian(value: string) {
		this.activeValue = value;
    this.onChange(value)
	}

	//#region ControlValueAccessor instance function
	registerOnChange(fn: any): void {
		this.onChange = fn;
	}

	registerOnTouched(fn: any): void {
		this.onTouched = fn;
	}

	writeValue(value: string): void {
		this.activeValue = value;
	}

	setDisabledState(isDisabled: boolean): void {
		this.disabled = isDisabled;
	}
	//#endregion ControlValueAccessor instance function
}
