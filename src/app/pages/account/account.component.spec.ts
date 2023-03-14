import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { UserFormComponent } from 'src/app/projects/node-api/components/user-form/user-form.component';
import { ModalService } from 'src/app/services/modal/modal.service';

import { AccountComponent } from './account.component';

describe('AccountComponent', () => {
	let component: AccountComponent;
	let fixture: ComponentFixture<AccountComponent>;
	let modalService: ModalService;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [AccountComponent, UserFormComponent],
			imports: [
				HttpClientTestingModule,
				MatFormFieldModule,
				MatInputModule,
				ReactiveFormsModule,
				BrowserAnimationsModule,
				MatIconModule,
				RouterModule.forRoot([]),
				MatDialogModule,
			],
		}).compileComponents();

		fixture = TestBed.createComponent(AccountComponent);
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
