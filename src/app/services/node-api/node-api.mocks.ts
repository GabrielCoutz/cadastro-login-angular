import { UserApiOutput, UserRegisterInput } from './node-api-service';

export const userToRegister: UserRegisterInput = {
	email: 'teste@wxample.com',
	name: 'teste',
	password: 'teste',
};

export const userRegisterResponse: UserApiOutput = {
	email: userToRegister.email,
	name: userToRegister.name,
	id: '123',
};

export const userUpdated = {
	email: 'updated',
	name: 'updated',
	id: '123',
};
