import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginFormComponent } from './components/login-form/login-form.component';
import { SigninFormComponent } from './components/signin-form/signin-form.component';

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
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class NodeApiRoutingModule {}
