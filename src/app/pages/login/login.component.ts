import { Component } from '@angular/core';
import {
	ModalService,
	ModalTriggers,
} from 'src/app/services/modal/modal.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
	constructor(private readonly modalService: ModalService) {}

	handleModalEvent(event: ModalTriggers | 'close') {
		if (event === 'close') this.modalService.closeModal();
		else this.modalService.openModal(event);
	}
}
