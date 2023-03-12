import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { ProjectComponent } from '../pages/project/project.component';
import { NodeApiComponent } from './node-api/node-api.component';
import { ProjectsRoutingModule } from './projects-routing';

@NgModule({
	declarations: [NodeApiComponent, ProjectComponent],
	imports: [CommonModule, ProjectsRoutingModule, MatButtonModule],
})
export class ProjectsModule {}
