import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';

import { IntroComponent } from '../components/intro/intro.component';
import { KnowledgeComponent } from '../components/knowledge/knowledge.component';
import { ProjectsComponent } from '../components/projects/projects.component';
import { SigninFormComponent } from '../projects/node-api/components/signin-form/signin-form.component';
import { HomeComponent } from './home/home.component';
import { CustomRoutingModule } from './routing.module';
@NgModule({
	declarations: [
		HomeComponent,
		IntroComponent,
		KnowledgeComponent,
		ProjectsComponent,
		SigninFormComponent,
	],
	imports: [
		MatCardModule,
		MatIconModule,
		MatTabsModule,
		FlexLayoutModule,
		MatInputModule,
		MatButtonModule,
		MatTooltipModule,
		MatBadgeModule,
		MatFormFieldModule,
		ReactiveFormsModule,
		CommonModule,
		RouterModule,
		CustomRoutingModule,
	],
})
export class PagesModule {}
