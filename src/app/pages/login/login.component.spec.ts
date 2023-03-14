import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { LoginFormComponent } from 'src/app/projects/node-api/components/login-form/login-form.component';
import { ModalService } from 'src/app/services/modal/modal.service';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
	let component: LoginComponent;
	let fixture: ComponentFixture<LoginComponent>;
	let modalService: ModalService;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [LoginComponent, LoginFormComponent],
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
				MatDialogModule,
			],
		}).compileComponents();

		fixture = TestBed.createComponent(LoginComponent);
		modalService = TestBed.inject(ModalService);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should trigger modal', () => {
		spyOn(modalService, 'openModal');

		component.openModal('loading');

		expect(modalService.openModal).toHaveBeenCalledTimes(1);
	});
});
