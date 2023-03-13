import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginFormComponent } from './components/login-form/login-form.component';
import { SigninFormComponent } from './components/signin-form/signin-form.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { AccountCanActiveGuard } from './guards/account-can-active.guard';

const routes: Routes = [
	{
		path: '',
		children: [
			{
				path: 'signin',
				component: SigninFormComponent,
			},
			{
				path: 'login',
				component: LoginFormComponent,
			},
			{
				path: 'account/:id',
				component: UserFormComponent,
				canActivate: [AccountCanActiveGuard],
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class NodeApiRoutingModule {}
