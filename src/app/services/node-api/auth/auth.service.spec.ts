import { HttpClient } from '@angular/common/http';
import {
	HttpClientTestingModule,
	HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { LoginResponse, userToLogin } from './auth.mocks';
import { AuthService } from './auth.service';

describe('AuthService', () => {
	let service: AuthService;
	let httpTestingController: HttpTestingController;
	let httpClient: HttpClient;
	const apiUrl = 'https://node-api-git-main-gabrielcoutz.vercel.app';

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
		});

		httpClient = TestBed.inject(HttpClient);
		httpTestingController = TestBed.inject(HttpTestingController);
		service = TestBed.inject(AuthService);
	});

	afterEach(() => {
		httpTestingController.verify();
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should login user and return token', () => {
		service.loginUser(userToLogin).subscribe({
			next: (response) => {
				expect(response.id).toBeInstanceOf(String);
				expect(response.token).toBeInstanceOf(String);
			},
			error: (err) => {
				expect(err).toBeFalsy();
			},
		});

		const req = httpTestingController.expectOne(`${apiUrl}/login`);
		req.flush(LoginResponse);

		expect(req.request.method).toEqual('POST');
	});
});
