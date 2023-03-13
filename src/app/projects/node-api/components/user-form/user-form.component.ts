import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ModalService } from 'src/app/services/modal/modal.service';
import { NodeApiService } from 'src/app/services/node-api/node-api-service';

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
	) {}

	error = '';
	message = '';
	userId = this.route.snapshot.params['id'];

	userForm: FormGroup = this.formBuilder.group({
		email: ['', [Validators.nullValidator, Validators.email]],
		name: ['', [Validators.nullValidator]],
	});

	ngOnInit(): void {
		this.apiService.getUser(this.userId).subscribe({
			next: ({ name, email }) => {
				this.userForm.patchValue({
					email,
					name,
				});
			},
			error: (err) => console.log(err),
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
			error: (err) => {
				this.modalService.modalTarget.next('close');

				console.log(err);
			},
		});
	}
}
