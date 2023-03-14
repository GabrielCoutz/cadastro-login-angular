import { TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';

import { ModalService } from './modal.service';

describe('ModalService', () => {
	let service: ModalService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [MatDialogModule],
		});
		service = TestBed.inject(ModalService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should close modal', () => {
		spyOn(service, 'openModal');

		service.openModal('loading');

		expect(service.openModal).toHaveBeenCalledTimes(1);
	});
});
