import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: 'node-api',
		loadChildren: async () =>
			(await import('./node-api/node-api-routing')).NodeApiRoutingModule,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ProjectsRoutingModule {}
