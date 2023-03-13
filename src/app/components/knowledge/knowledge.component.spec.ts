import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { KnowledgeComponent } from './knowledge.component';

describe('KnowledgeComponent', () => {
	let component: KnowledgeComponent;
	let fixture: ComponentFixture<KnowledgeComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [KnowledgeComponent],
			imports: [MatTabsModule, FlexLayoutModule, BrowserAnimationsModule],
		}).compileComponents();

		fixture = TestBed.createComponent(KnowledgeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
