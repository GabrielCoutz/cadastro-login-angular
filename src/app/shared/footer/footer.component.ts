import { Component } from '@angular/core';

import {
	infoFooterService,
	InfoFooterModel,
} from '../../services/info-footer/info-footer.service';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
	constructor(private readonly infoFooterService: infoFooterService) {}

	info: InfoFooterModel | undefined;

	ngOnInit(): void {
		this.infoFooterService.fetchFooterData().subscribe({
			next: (data) => (this.info = data),
			error: (err) => console.log(err),
		});
	}
}
