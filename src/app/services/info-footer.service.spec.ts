import { TestBed } from '@angular/core/testing';

import { InfoFooterService } from './info-footer.service';

describe('InfoFooterService', () => {
	let service: InfoFooterService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(InfoFooterService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
