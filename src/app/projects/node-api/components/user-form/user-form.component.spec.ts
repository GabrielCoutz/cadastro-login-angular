import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { FormComponent } from '../form/form.component';
import { UserFormComponent } from './user-form.component';

describe('UserFormComponent', () => {
	let component: UserFormComponent;
	let fixture: ComponentFixture<UserFormComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [UserFormComponent, FormComponent],
			imports: [
				HttpClientTestingModule,
				MatFormFieldModule,
				MatInputModule,
				ReactiveFormsModule,
				BrowserAnimationsModule,
				MatIconModule,
				RouterModule.forRoot([]),
			],
		}).compileComponents();

		fixture = TestBed.createComponent(UserFormComponent);
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
