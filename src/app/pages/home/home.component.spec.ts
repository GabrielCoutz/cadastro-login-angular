import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { IntroComponent } from 'src/app/components/intro/intro.component';
import { KnowledgeComponent } from 'src/app/components/knowledge/knowledge.component';
import { ProjectsComponent } from 'src/app/components/projects/projects.component';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
	let component: HomeComponent;
	let fixture: ComponentFixture<HomeComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [
				HomeComponent,
				IntroComponent,
				KnowledgeComponent,
				ProjectsComponent,
			],
			imports: [
				MatIconModule,
				MatTabsModule,
				FlexLayoutModule,
				BrowserAnimationsModule,
				MatCardModule,
				MatBadgeModule,
				RouterModule.forRoot([]),
			],
		}).compileComponents();

		fixture = TestBed.createComponent(HomeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
