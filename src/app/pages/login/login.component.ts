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

	openModal(event: ModalTriggers) {
		this.modalService.modalTarget.next(event);
	}
}
