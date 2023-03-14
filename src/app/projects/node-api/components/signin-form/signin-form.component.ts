import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalTriggers } from 'src/app/services/modal/modal.service';
import {
	ErrorApiOutput,
	NodeApiService,
} from 'src/app/services/node-api/user/node-api-service';

@Component({
	selector: 'app-signin-form',
	templateUrl: './signin-form.component.html',
	styleUrls: ['./signin-form.component.scss'],
})
export class SigninFormComponent {
	constructor(
		private readonly formBuilder: FormBuilder,
		private readonly apiService: NodeApiService,
		private readonly router: Router,
	) {}

	@Output() modalEvent = new EventEmitter<ModalTriggers>();
	minPasswordLength = 5;
	minNameLength = 5;
	hidePassword = true;
	error = '';
	signinForm: FormGroup = this.formBuilder.group({
		name: ['', [Validators.required, Validators.minLength(this.minNameLength)]],
		email: ['', [Validators.required, Validators.email]],
		password: [
			'',
			[Validators.required, Validators.minLength(this.minPasswordLength)],
		],
	});

	submit() {
		this.error = '';
		this.modalEvent.emit('loading');

		this.apiService.registerUser(this.signinForm.value).subscribe({
			next: () => {
				this.modalEvent.emit('close');
				this.modalEvent.emit('createdAccount');
				this.router.navigate(['projects/node-api/login']);
			},

			error: (err: ErrorApiOutput) => {
				this.modalEvent.emit('close');
				this.error = err.error.message;
			},
		});
	}
}
