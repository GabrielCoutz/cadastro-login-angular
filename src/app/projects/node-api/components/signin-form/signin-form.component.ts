import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalService } from 'src/app/services/modal/modal.service';
import {
	ErrorApiOutput,
	NodeApiService,
} from 'src/app/services/node-api/user/node-api-service';

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
		name: ['', [Validators.required, Validators.minLength(this.minNameLength)]],
		email: ['', [Validators.required, Validators.email]],
		password: [
			'',
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
