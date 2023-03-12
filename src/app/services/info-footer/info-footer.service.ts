import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface InfoFooterModel {
	subject_matter: string;
	comment: string;
	contact: {
		name: string;
		tel: string;
		email: string;
	};
}

@Injectable({
	providedIn: 'root',
})
export class InfoFooterService {
	private readonly apiUrl =
		'https://63a59f6af8f3f6d4abfb383d.mockapi.io/api-portfolio/sendEmail';

	constructor(private readonly request: HttpClient) {}

	fetchFooterData(): Observable<InfoFooterModel> {
		return this.request.get<InfoFooterModel>(this.apiUrl);
	}
}
