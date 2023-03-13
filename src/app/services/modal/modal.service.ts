import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class ModalService {
	readonly modalTarget = new Subject<
		'loading' | 'close' | 'deleteAccount' | 'createdAccount'
	>();

	openModal() {
		return this.modalTarget.asObservable();
	}
}
