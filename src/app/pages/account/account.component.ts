import { Component } from '@angular/core';
import {
	ModalService,
	ModalTriggers,
} from 'src/app/services/modal/modal.service';

@Component({
	selector: 'app-account',
	templateUrl: './account.component.html',
	styleUrls: ['./account.component.scss'],
})
export class AccountComponent {
	constructor(private readonly modalService: ModalService) {}

	openModal(event: ModalTriggers) {
		this.modalService.openModal(event);
	}
}
