import { HttpClient } from '@angular/common/http';
import {
	HttpClientTestingModule,
	HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ErrorApiOutput, NodeApiService } from './node-api-service';
import {
	userRegisterResponse,
	userToRegister,
	userUpdated,
} from './node-api.mocks';

describe('ApiServiceService', () => {
	let service: NodeApiService;
	let httpTestingController: HttpTestingController;
	let httClient: HttpClient;
	const apiUrl = 'https://node-api-git-main-gabrielcoutz.vercel.app';

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
		});

		httClient = TestBed.inject(HttpClient);
		httpTestingController = TestBed.inject(HttpTestingController);
		service = TestBed.inject(NodeApiService);
	});
	afterEach(() => {
		httpTestingController.verify();
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should create and return user', (done) => {
		service.registerUser(userToRegister).subscribe({
			next: (response) => {
				expect(response.email).toEqual(userToRegister.email);
				expect(response.name).toEqual(userToRegister.name);
				expect(response.id).toBeInstanceOf(String);
				done();
			},
			error: (err: ErrorApiOutput) => {
				expect(err).toBeFalsy();
				done();
			},
		});

		const req = httpTestingController.expectOne(`${apiUrl}/user`);
		req.flush(userRegisterResponse);

		expect(req.request.method).toEqual('POST');
	});

	it('should update user', (done) => {
		service.updateUser(userUpdated.id, userUpdated).subscribe({
			next: (response) => {
				expect(response.email).toEqual(userUpdated.email);
				expect(response.name).toEqual(userUpdated.name);
				done();
			},
			error: (err: ErrorApiOutput) => {
				expect(err).toBeFalsy();
				done();
			},
		});

		const req = httpTestingController.expectOne(
			`${apiUrl}/user/${userUpdated.id}`,
		);
		req.flush(userUpdated);

		expect(req.request.method).toEqual('PATCH');
	});

	it('should get a user', (done) => {
		service.getUser(userUpdated.id).subscribe({
			next: (response) => {
				expect(response.email).toEqual(userUpdated.email);
				expect(response.name).toEqual(userUpdated.name);
				expect(response.id).toEqual(userUpdated.id);
				done();
			},
			error: (err: ErrorApiOutput) => {
				expect(err).toBeFalsy();
				done();
			},
		});

		const req = httpTestingController.expectOne(
			`${apiUrl}/user/${userUpdated.id}`,
		);
		req.flush(userUpdated);

		expect(req.request.method).toEqual('GET');
	});
});
