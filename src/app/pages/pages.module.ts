import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';

import { FormComponent } from '../projects/node-api/components/form/form.component';
import { LoginFormComponent } from '../projects/node-api/components/login-form/login-form.component';
import { SigninFormComponent } from '../projects/node-api/components/signin-form/signin-form.component';
import { UserFormComponent } from '../projects/node-api/components/user-form/user-form.component';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';

@NgModule({
	declarations: [
		SigninFormComponent,
		UserFormComponent,
		LoginFormComponent,
		FormComponent,
		LoginComponent,
		SigninComponent,
		AccountComponent,
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
		MatDialogModule,
	],
})
export class PagesModule {}
