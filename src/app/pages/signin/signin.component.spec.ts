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
import { SigninFormComponent } from 'src/app/projects/node-api/components/signin-form/signin-form.component';
import { ModalService } from 'src/app/services/modal/modal.service';

import { SigninComponent } from './signin.component';

describe('SigninComponent', () => {
	let component: SigninComponent;
	let fixture: ComponentFixture<SigninComponent>;
	let modalService: ModalService;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [SigninComponent, SigninFormComponent],
			imports: [
				HttpClientTestingModule,
				MatFormFieldModule,
				MatInputModule,
				MatIconModule,
				ReactiveFormsModule,
				MatTooltipModule,
				RouterModule.forRoot([]),
				BrowserAnimationsModule,
				MatDialogModule,
			],
		}).compileComponents();

		fixture = TestBed.createComponent(SigninComponent);
		modalService = TestBed.inject(ModalService);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should trigger modal', () => {
		spyOn(modalService, 'openModal');

		component.openModal('close');

		expect(modalService.openModal).toHaveBeenCalledTimes(1);
	});
});
