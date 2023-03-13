import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from 'src/app/pages/account/account.component';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { SigninComponent } from 'src/app/pages/signin/signin.component';

import { AccountCanActiveGuard } from './guards/account-can-active.guard';

const routes: Routes = [
	{
		path: '',
		children: [
			{
				path: 'signin',
				component: SigninComponent,
			},
			{
				path: 'login',
				component: LoginComponent,
			},
			{
				path: 'account/:id',
				component: AccountComponent,
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
