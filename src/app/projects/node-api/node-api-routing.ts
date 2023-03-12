import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SigninFormComponent } from './components/signin-form/signin-form.component';
import { NodeApiComponent } from './node-api.component';

const routes: Routes = [
	{
		path: '',
		component: NodeApiComponent,
	},
	{
		path: 'sign-in',
		component: SigninFormComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class NodeApiRoutingModule {}
