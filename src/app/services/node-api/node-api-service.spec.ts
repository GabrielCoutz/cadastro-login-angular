import { TestBed } from '@angular/core/testing';

import { NodeApiService } from './node-api-service';

describe('ApiServiceService', () => {
	let service: NodeApiService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(NodeApiService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
