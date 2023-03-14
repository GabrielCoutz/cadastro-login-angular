import { Component } from '@angular/core';
import {
	ModalService,
	ModalTriggers,
} from 'src/app/services/modal/modal.service';

@Component({
	selector: 'app-signin',
	templateUrl: './signin.component.html',
	styleUrls: ['./signin.component.scss'],
})
export class SigninComponent {
	constructor(private readonly modalService: ModalService) {}

	handleModalEvent(event: ModalTriggers) {
		if (event === 'close') this.modalService.closeModal();
		else this.modalService.openModal(event);
	}
}
