import { HttpClient } from '@angular/common/http';
import {
	HttpClientTestingModule,
	HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { InfoFooterModel, infoFooterService } from './info-footer.service';

describe('InfoFooterService', () => {
	let service: infoFooterService;
	let httpTestingController: HttpTestingController;
	let httClient: HttpClient;

	const mockResponse: InfoFooterModel = {
		subject_matter: 'Desafio Frontend',
		comment: 'Conteúdo do e-mail',
		contact: {
			name: 'Enacom',
			tel: '(31) 3879-5667',
			email: 'enacom@enacom.com.br',
		},
	};

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
		});

		httClient = TestBed.inject(HttpClient);
		httpTestingController = TestBed.inject(HttpTestingController);
		service = TestBed.inject(infoFooterService);
	});
	afterEach(() => {
		httpTestingController.verify();
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
