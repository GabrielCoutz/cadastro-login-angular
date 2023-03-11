import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface UserRegisterInput {
	name: string;
	email: string;
	password: string;
}

interface UserRegisterOutput {
	id: string;
	name: string;
	email: string;
}

@Injectable({
	providedIn: 'root',
})
export class ApiServiceService {
	constructor(private readonly request: HttpClient) {}
	private readonly apiUrl = 'https://node-api-git-main-gabrielcoutz.vercel.app';

	registerUser(user: UserRegisterInput): Observable<UserRegisterOutput> {
		return this.request.post<UserRegisterOutput>(`${this.apiUrl}/user`, user);
	}
}
