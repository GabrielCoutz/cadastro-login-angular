import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { SigninFormComponent } from './components/node-api/signin-form/signin-form.component';
import { NodeApiComponent } from './pages/node-api/node-api.component';
@NgModule({
	declarations: [NodeApiComponent, SigninFormComponent],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		MatInputModule,
		MatIconModule,
		BrowserAnimationsModule,
		MatButtonModule,
		FlexLayoutModule,
		MatTooltipModule,
		AppRoutingModule,
		HttpClientModule,
	],
})
export class ProjectsModule {}
