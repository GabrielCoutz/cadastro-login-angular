import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
	NodeApiService,
	ErrorApiOutput,
} from 'src/app/services/node-api/node-api-service';

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

	minPasswordLength = 5;
	minNameLength = 5;
	hidePassword = true;
	error = '';

	signinForm: FormGroup = this.formBuilder.group({
		name: [
			'teste',
			[Validators.required, Validators.minLength(this.minNameLength)],
		],
		email: ['teste@gmail.com', [Validators.required, Validators.email]],
		password: [
			'12345',
			[Validators.required, Validators.minLength(this.minPasswordLength)],
		],
	});

	submit() {
		this.error = '';

		this.apiService.registerUser(this.signinForm.value).subscribe({
			next: (user) => {
				console.log(user);
				this.router.navigate(['projects/node-api/login']);
			},
			error: (err: ErrorApiOutput) => {
				console.log(err);
				this.error = err.error.message;
			},
		});
	}
}
