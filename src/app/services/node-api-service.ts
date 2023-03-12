import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface UserRegisterInput {
	name: string;
	email: string;
	password: string;
}

interface UserApiOutput {
	id: string;
	name: string;
	email: string;
}

@Injectable({
	providedIn: 'root',
})
export class NodeApiService {
	constructor(private readonly request: HttpClient) {}
	private readonly apiUrl = 'https://node-api-git-main-gabrielcoutz.vercel.app';

	getUsers(): Observable<UserApiOutput[]> {
		return this.request.get<UserApiOutput[]>(`${this.apiUrl}/users`);
	}

	getUser(userId: string): Observable<UserApiOutput> {
		return this.request.get<UserApiOutput>(`${this.apiUrl}/user/${userId}`);
	}

	registerUser(user: UserRegisterInput): Observable<UserApiOutput> {
		return this.request.post<UserApiOutput>(`${this.apiUrl}/user`, user);
	}
}
