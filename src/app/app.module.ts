import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './components/intro/intro.component';
import { KnowledgeComponent } from './components/knowledge/knowledge.component';
import { HeaderComponent } from './shared/header/header.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		IntroComponent,
		KnowledgeComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatButtonModule,
		FlexLayoutModule,
		LayoutModule,
		MatIconModule,
		MatTooltipModule,
		MatToolbarModule,
		MatSidenavModule,
		MatCardModule,
		MatTabsModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
