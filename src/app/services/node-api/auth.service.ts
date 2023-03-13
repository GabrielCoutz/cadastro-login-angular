import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface AuthServiceInput {
	email: string;
	password: string;
}

interface AuthServiceOutput {
	id: string;
	token: string;
}

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	constructor(private readonly request: HttpClient) {}

	private readonly apiUrl = 'https://node-api-git-main-gabrielcoutz.vercel.app';

	loginUser(payload: AuthServiceInput): Observable<AuthServiceOutput> {
		return this.request.post<AuthServiceOutput>(
			`${this.apiUrl}/login`,
			payload,
		);
	}

	logout(): void {
		localStorage.removeItem('token');
	}
}
