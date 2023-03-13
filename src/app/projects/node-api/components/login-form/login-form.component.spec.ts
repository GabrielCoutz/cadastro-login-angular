import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ModalService } from 'src/app/services/modal/modal.service';

import { FormComponent } from '../form/form.component';
import { LoginFormComponent } from './login-form.component';

describe('LoginFormComponent', () => {
	let component: LoginFormComponent;
	let fixture: ComponentFixture<LoginFormComponent>;
	let modalService: ModalService;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [LoginFormComponent, FormComponent],
			imports: [
				HttpClientTestingModule,
				MatFormFieldModule,
				MatIconModule,
				ReactiveFormsModule,
				MatTooltipModule,
				MatFormFieldModule,
				MatInputModule,
				BrowserAnimationsModule,
				RouterModule.forRoot([]),
			],
		}).compileComponents();

		fixture = TestBed.createComponent(LoginFormComponent);
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
