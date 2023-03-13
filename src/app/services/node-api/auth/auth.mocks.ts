import { AuthServiceInput, AuthServiceOutput } from './auth.service';

export const userToLogin: AuthServiceInput = {
	email: 'teste@example.com',
	password: 'teste',
};

export const LoginResponse: AuthServiceOutput = {
	id: '123',
	token: '123',
};
