import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalTriggers } from 'src/app/services/modal/modal.service';
import { AuthService } from 'src/app/services/node-api/auth/auth.service';
import {
	ErrorApiOutput,
	NodeApiService,
} from 'src/app/services/node-api/user/node-api-service';

@Component({
	selector: 'app-user-form',
	templateUrl: './user-form.component.html',
	styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent {
	constructor(
		private readonly formBuilder: FormBuilder,
		private readonly apiService: NodeApiService,
		private readonly activatedRoute: ActivatedRoute,
		private readonly authService: AuthService,
		private readonly router: Router,
	) {}

	@Output() modalEvent = new EventEmitter<ModalTriggers>();
	error = '';
	message = '';
	userId = this.activatedRoute.snapshot.params['id'];
	userForm: FormGroup = this.formBuilder.group({
		email: ['', [Validators.nullValidator, Validators.email]],
		name: ['', [Validators.nullValidator]],
	});

	ngOnInit(): void {
		this.modalEvent.emit('loading');

		this.apiService.getUser(this.userId).subscribe({
			next: ({ name, email }) => {
				this.modalEvent.emit('close');

				this.userForm.patchValue({
					email,
					name,
				});
			},
		});
	}

	submit() {
		this.error = '';
		this.message = '';
		this.modalEvent.emit('close');

		this.apiService.updateUser(this.userId, this.userForm.value).subscribe({
			next: ({ name, email }) => {
				this.modalEvent.emit('close');
				this.userForm.patchValue({
					email,
					name,
				});
				this.message = 'Dados atualizados com sucesso';
			},

			error: (err: ErrorApiOutput) => {
				this.modalEvent.emit('close');
				this.error = err.error.message;
			},
		});
	}

	logOut() {
		this.authService.logout();
		this.router.navigate(['projects/node-api/login']);
	}
}
