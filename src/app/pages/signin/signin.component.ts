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

	openModal(event: ModalTriggers) {
		this.modalService.openModal(event);
	}
}
