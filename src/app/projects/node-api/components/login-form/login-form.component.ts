import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalTriggers } from 'src/app/services/modal/modal.service';
import {
	AuthService,
	AuthServiceOutput,
} from 'src/app/services/node-api/auth/auth.service';
import { ErrorApiOutput } from 'src/app/services/node-api/user/node-api-service';

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

	@Output() modalEvent = new EventEmitter<ModalTriggers>();
	minPasswordLength = 5;
	hidePassword = true;
	error = '';
	loginForm: FormGroup = this.formBuilder.group({
		email: ['', [Validators.required, Validators.email]],
		password: [
			'',
			[Validators.required, Validators.minLength(this.minPasswordLength)],
		],
	});

	submit() {
		this.error = '';
		this.modalEvent.emit('loading');

		this.authService.loginUser(this.loginForm.value).subscribe({
			next: (response: AuthServiceOutput) => {
				this.modalEvent.emit('close');
				localStorage.setItem('token', response.token);
				this.router.navigate(['account', response.id]);
			},

			error: (err: ErrorApiOutput) => {
				this.modalEvent.emit('close');
				this.error = err.error.message;
			},
		});
	}
}
