import { HttpClient } from '@angular/common/http';
import {
	HttpClientTestingModule,
	HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { infoFooterService } from './info-footer.service';
import { infoServiceResponse } from './info-service.mocks';

describe('InfoFooterService', () => {
	let service: infoFooterService;
	let httpTestingController: HttpTestingController;
	let httpClient: HttpClient;
	const apiUrl =
		'https://63a59f6af8f3f6d4abfb383d.mockapi.io/api-portfolio/sendEmail';

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
		});

		httpClient = TestBed.inject(HttpClient);
		httpTestingController = TestBed.inject(HttpTestingController);
		service = TestBed.inject(infoFooterService);
	});
	afterEach(() => {
		httpTestingController.verify();
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should return all fields', (done) => {
		service.fetchFooterData().subscribe({
			next: (response) => {
				expect(response.subject_matter).toEqual('mock teste');
				expect(response.comment).toEqual('mock teste');
				expect(response.contact.email).toEqual('mock teste');
				expect(response.contact.name).toEqual('mock teste');
				expect(response.contact.tel).toEqual('mock teste');
				done();
			},
			error: (err) => {
				expect(err).toBeFalsy();
				done();
			},
		});
		const req = httpTestingController.expectOne(apiUrl);
		req.flush(infoServiceResponse);

		expect(req.request.method).toEqual('GET');
	});
});
