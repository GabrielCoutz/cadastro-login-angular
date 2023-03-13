import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ModalComponent } from './components/modal/modal.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';

describe('AppComponent', () => {
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				HttpClientTestingModule,
				MatDialogModule,
				RouterModule.forRoot([]),
			],
			declarations: [
				AppComponent,
				HeaderComponent,
				ModalComponent,
				FooterComponent,
			],
		}).compileComponents();
	});

	it('should create the app', () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.componentInstance;
		expect(app).toBeTruthy();
	});

	it('should have as title "desafio"', () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.componentInstance;
		expect(app.title).toEqual('desafio');
	});
});
