import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatedAccountComponent } from './components/modal/created-account/created-account.component';
import { LoadingComponent } from './components/modal/loading/loading.component';
import { ModalComponent } from './components/modal/modal.component';
import { PagesModule } from './pages/pages.module';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		LoadingComponent,
		ModalComponent,
		CreatedAccountComponent,
	],
	imports: [
		CommonModule,
		HttpClientModule,
		PagesModule,
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		RouterModule,
		FlexLayoutModule,
		MatProgressSpinnerModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
