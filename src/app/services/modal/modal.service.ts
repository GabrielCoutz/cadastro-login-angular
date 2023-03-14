import { ComponentType } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreatedAccountComponent } from 'src/app/components/modal/created-account/created-account.component';
import { LoadingComponent } from 'src/app/components/modal/loading/loading.component';

const modalsComponentsList = {
	loading: LoadingComponent,
	createdAccount: CreatedAccountComponent,
	close: null,
};
export type ModalTriggers = keyof typeof modalsComponentsList;

@Injectable({
	providedIn: 'root',
})
export class ModalService {
	constructor(private dialog: MatDialog) {}

	private enterAnimationDuration = '1000';
	private exitAnimationDuration = '1000';

	openModal(trigger: ModalTriggers) {
		if (trigger === 'close') return this.dialog.closeAll();

		const modal = modalsComponentsList[trigger];
		this.openDialog(modal);
	}

	private openDialog(
		component: ComponentType<unknown>,
		config?: MatDialogConfig,
	) {
		this.dialog.open(component, {
			width: '500px',
			enterAnimationDuration: this.enterAnimationDuration,
			exitAnimationDuration: this.exitAnimationDuration,
			...config,
		});
	}
}
