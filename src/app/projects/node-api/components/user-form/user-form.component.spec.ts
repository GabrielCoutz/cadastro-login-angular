import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ModalService } from 'src/app/services/modal/modal.service';

import { FormComponent } from '../form/form.component';
import { UserFormComponent } from './user-form.component';

describe('UserFormComponent', () => {
	let component: UserFormComponent;
	let fixture: ComponentFixture<UserFormComponent>;
	let modalService: ModalService;

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
		modalService = TestBed.inject(ModalService);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should trigger a target to modalService when form submit', () => {
		spyOn(modalService.modalTarget, 'next');

		component.submit();
		fixture.detectChanges();

		expect(modalService.modalTarget.next).toHaveBeenCalledTimes(1);
	});
});
