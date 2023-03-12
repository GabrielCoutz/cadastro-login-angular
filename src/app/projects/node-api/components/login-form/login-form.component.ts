import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/node-api/auth.service';
import { ErrorApiOutput } from 'src/app/services/node-api/node-api-service';

@Component({
	selector: 'app-login-form',
	templateUrl: './login-form.component.html',
	styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
	constructor(
		private readonly formBuilder: FormBuilder,
		private readonly authService: AuthService,
		private readonly router: Router,
	) {}

	minPasswordLength = 5;
	hidePassword = true;
	error = '';

	loginForm: FormGroup = this.formBuilder.group({
		email: ['teste@gmail.com', [Validators.required, Validators.email]],
		password: [
			'12345',
			[Validators.required, Validators.minLength(this.minPasswordLength)],
		],
	});

	submit() {
		this.error = '';

		this.authService.loginUser(this.loginForm.value).subscribe({
			next: (response) => {
				console.log(response);

				localStorage.setItem('token', response.token);
				localStorage.setItem('userId', response.id);

				this.router.navigate(['projects/node-api/account']);
			},
			error: (err: ErrorApiOutput) => {
				console.log(err);

				this.error = err.error.message;
			},
		});
	}
}
