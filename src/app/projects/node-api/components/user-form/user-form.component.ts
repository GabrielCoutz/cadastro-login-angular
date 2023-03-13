import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalService } from 'src/app/services/modal/modal.service';
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
		private readonly modalService: ModalService,
		private readonly route: ActivatedRoute,
		private readonly authService: AuthService,
		private readonly router: Router,
	) {}

	error = '';
	message = '';
	userId = this.route.snapshot.params['id'];

	userForm: FormGroup = this.formBuilder.group({
		email: ['', [Validators.nullValidator, Validators.email]],
		name: ['', [Validators.nullValidator]],
	});

	ngOnInit(): void {
		this.modalService.modalTarget.next('loading');
		this.apiService.getUser(this.userId).subscribe({
			next: ({ name, email }) => {
				this.modalService.modalTarget.next('close');
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
		this.modalService.modalTarget.next('loading');

		this.apiService.updateUser(this.userId, this.userForm.value).subscribe({
			next: ({ name, email }) => {
				this.modalService.modalTarget.next('close');

				this.userForm.patchValue({
					email,
					name,
				});
				this.message = 'Dados atualizados com sucesso';
			},
			error: (err: ErrorApiOutput) => {
				this.modalService.modalTarget.next('close');
				this.error = err.error.message;
			},
		});
	}

	logOut() {
		this.authService.logout();
		this.router.navigate(['projects/node-api/login']);
	}
}
