import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
	selector: 'app-signin-form',
	templateUrl: './signin-form.component.html',
	styleUrls: ['./signin-form.component.scss'],
})
export class SigninFormComponent {
	constructor(
		private readonly formBuilder: FormBuilder,
		private readonly apiService: ApiServiceService,
	) {}

	minPasswordLength = 5;
	minNameLength = 5;
	hidePassword = true;

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
		this.apiService.registerUser(this.signinForm.value).subscribe({
			next: (user) => console.log(user),
			error: (err) => console.log(err),
		});
	}
}
