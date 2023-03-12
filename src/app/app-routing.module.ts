import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		loadChildren: async () =>
			(await import('./pages/pages.module')).PagesModule,
		pathMatch: 'full',
	},
	{
		path: 'projects',
		loadChildren: async () =>
			(await import('./projects/projects.module')).ProjectsModule,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
