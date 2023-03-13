import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { LoadingComponent } from './loading.component';

describe('LoadingComponent', () => {
	let component: LoadingComponent;
	let fixture: ComponentFixture<LoadingComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [LoadingComponent],
			imports: [MatProgressSpinnerModule, MatIconModule],
		}).compileComponents();

		fixture = TestBed.createComponent(LoadingComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
