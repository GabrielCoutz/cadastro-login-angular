import { ComponentType } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreatedAccountComponent } from 'src/app/components/modal/created-account/created-account.component';
import { LoadingComponent } from 'src/app/components/modal/loading/loading.component';

const modalsComponentsList = {
	loading: {
		component: LoadingComponent,
		config: {
			disableClose: true,
		},
	},
	createdAccount: {
		component: CreatedAccountComponent,
		config: {},
	},
};
export type ModalTriggers = keyof typeof modalsComponentsList | 'close';

@Injectable({
	providedIn: 'root',
})
export class ModalService {
	constructor(private dialog: MatDialog) {}

	openModal(trigger: Exclude<ModalTriggers, 'close'>) {
		const { component, config } = modalsComponentsList[trigger];
		this.openDialog(component, config);
	}

	closeModal() {
		this.dialog.closeAll();
	}

	private openDialog(
		component: ComponentType<unknown>,
		config?: MatDialogConfig,
	) {
		const enterAnimationDuration = '1000';
		const exitAnimationDuration = '1000';

		this.dialog.open(component, {
			width: '500px',
			enterAnimationDuration,
			exitAnimationDuration,
			...config,
		});
	}
}
