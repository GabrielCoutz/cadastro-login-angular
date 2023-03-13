import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export type ModalTriggers = 'loading' | 'close' | 'createdAccount';

@Injectable({
	providedIn: 'root',
})
export class ModalService {
	readonly modalTarget = new Subject<ModalTriggers>();

	openModal() {
		return this.modalTarget.asObservable();
	}
}
