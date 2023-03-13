import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalService } from 'src/app/services/modal/modal.service';
import {
	NodeApiService,
	ErrorApiOutput,
} from 'src/app/services/node-api/node-api-service';

type EventTargets = 'loading' | 'deleteAccount';

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
		private readonly modalService: ModalService,
	) {}

	minPasswordLength = 5;
	minNameLength = 5;
	hidePassword = true;
	error = '';

	@Output() modalEvent = new EventEmitter();

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
		this.modalService.modalTarget.next('loading');

		this.apiService.registerUser(this.signinForm.value).subscribe({
			next: () => {
				this.modalService.modalTarget.next('close');
				this.modalService.modalTarget.next('createdAccount');
				this.router.navigate(['projects/node-api/login']);
			},
			error: (err: ErrorApiOutput) => {
				this.modalService.modalTarget.next('close');
				this.error = err.error.message;
			},
		});
	}
}
