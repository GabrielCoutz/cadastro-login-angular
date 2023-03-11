import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { IntroComponent } from './components/intro/intro.component';
import { KnowledgeComponent } from './components/knowledge/knowledge.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { HomeComponent } from './pages/home/home.component';
@NgModule({
	declarations: [
		HomeComponent,
		IntroComponent,
		KnowledgeComponent,
		ProjectsComponent,
	],
	imports: [
		CommonModule,
		MatCardModule,
		MatIconModule,
		MatTabsModule,
		FlexLayoutModule,
		BrowserModule,
		BrowserAnimationsModule,
		MatButtonModule,
		MatTooltipModule,
		MatBadgeModule,
		AppRoutingModule,
	],
})
export class HomeModule {}
