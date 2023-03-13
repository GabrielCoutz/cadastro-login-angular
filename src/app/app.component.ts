import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = 'desafio';

	teste(evento: any) {
		console.log('recebido');

		console.log(evento);
	}
}
