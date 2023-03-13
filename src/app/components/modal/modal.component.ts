/* eslint-disable indent */
import { ComponentType } from '@angular/cdk/portal';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { ModalService } from 'src/app/services/modal.service';

import { CreatedAccountComponent } from './created-account/created-account.component';
import { LoadingComponent } from './loading/loading.component';

@Component({
	selector: 'app-modal',
	templateUrl: './modal.component.html',
	styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
	constructor(private modalService: ModalService, private dialog: MatDialog) {}

	private modalSubscription: Subscription | undefined;
	private enterAnimationDuration = '1000';
	private exitAnimationDuration = '1000';

	ngOnInit() {
		this.modalSubscription = this.modalService
			.openModal()
			.subscribe((target) => {
				switch (target) {
					case 'loading':
						this.openModal(LoadingComponent);
						break;

					case 'createdAccount':
						this.openModal(CreatedAccountComponent);
						break;

					case 'close':
						this.dialog.closeAll();
						break;
					default:
						break;
				}
			});
	}

	ngOnDestroy() {
		this.modalSubscription?.unsubscribe();
	}

	private openModal(component: ComponentType<unknown>) {
		this.dialog.open(component, {
			width: '250px',
			enterAnimationDuration: this.enterAnimationDuration,
			exitAnimationDuration: this.exitAnimationDuration,
		});
	}
}
