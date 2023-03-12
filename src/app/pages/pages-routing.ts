import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
	},
	{
		path: 'projects',
		children: [
			{
				path: 'node-api',
				loadChildren: async () =>
					(await import('../projects/node-api/node-api-routing'))
						.NodeApiRoutingModule,
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class RoutingModule {}
