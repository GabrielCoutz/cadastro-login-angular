import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountComponent } from './pages/account/account.component';
import { LoginComponent } from './pages/login/login.component';
import { SigninComponent } from './pages/signin/signin.component';
import { AccountCanActiveGuard } from './projects/node-api/guards/account-can-active.guard';

const routes: Routes = [
	{
		path: '',
		component: SigninComponent,
		pathMatch: 'full',
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
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
