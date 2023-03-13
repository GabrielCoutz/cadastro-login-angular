import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface UserRegisterInput {
	name: string;
	email: string;
	password: string;
}

export type UserApiInput = Partial<UserRegisterInput>;

export interface UserApiOutput {
	id: string;
	name: string;
	email: string;
}

export interface ErrorApiOutput {
	error: {
		message: string;
		statusTitle: string;
	};
	status: number;
}

@Injectable({
	providedIn: 'root',
})
export class NodeApiService {
	constructor(private readonly request: HttpClient) {}
	private readonly apiUrl = 'https://node-api-git-main-gabrielcoutz.vercel.app';

	getUser(userId: string): Observable<UserApiOutput> {
		return this.request.get<UserApiOutput>(`${this.apiUrl}/user/${userId}`);
	}

	registerUser(user: UserRegisterInput): Observable<UserApiOutput> {
		return this.request.post<UserApiOutput>(`${this.apiUrl}/user`, user);
	}

	updateUser(userId: string, user: UserApiInput): Observable<UserApiOutput> {
		const token = localStorage.getItem('token');

		return this.request.patch<UserApiOutput>(
			`${this.apiUrl}/user/${userId}`,
			user,
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			},
		);
	}
}
