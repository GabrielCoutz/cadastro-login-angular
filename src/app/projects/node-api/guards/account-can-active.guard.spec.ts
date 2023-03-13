import { TestBed } from '@angular/core/testing';

import { AccountCanActiveGuard } from './account-can-active.guard';

describe('AccountCanActiveGuard', () => {
	let guard: AccountCanActiveGuard;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		guard = TestBed.inject(AccountCanActiveGuard);
	});

	it('should be created', () => {
		expect(guard).toBeTruthy();
	});
});
