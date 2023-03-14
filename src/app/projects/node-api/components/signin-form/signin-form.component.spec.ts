import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { FormComponent } from '../form/form.component';
import { SigninFormComponent } from './signin-form.component';

describe('SigninFormComponent', () => {
	let component: SigninFormComponent;
	let fixture: ComponentFixture<SigninFormComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [SigninFormComponent, FormComponent],
			imports: [
				HttpClientTestingModule,
				MatFormFieldModule,
				MatInputModule,
				MatIconModule,
				ReactiveFormsModule,
				MatTooltipModule,
				RouterModule.forRoot([]),
				BrowserAnimationsModule,
			],
		}).compileComponents();

		fixture = TestBed.createComponent(SigninFormComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should trigger a modalEvent when submit form', () => {
		spyOn(component.modalEvent, 'emit');
		component.submit();

		expect(component.modalEvent.emit).toHaveBeenCalledTimes(1);
	});
});
