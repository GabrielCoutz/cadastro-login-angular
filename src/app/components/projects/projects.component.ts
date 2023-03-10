import { Component } from '@angular/core';

interface ProjectsModel {
	title: string;
	tecnologies: string[];
	date: string;
	description: string;
	githubLink: string;
	externalLink?: string;
}

@Component({
	selector: 'app-projects',
	templateUrl: './projects.component.html',
	styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
	projects: ProjectsModel[] = [
		{
			title: 'API em Node.js V2. Com Clean Architecture',
			tecnologies: [
				'Typescript',
				'Javascript ES21',
				'JWT',
				'Node.js',
				'Vitest',
			],
			date: '03/2023',
			description:
				'Com o começo nos estudos da Clean Architecture, foi decidido a refatoração do projeto anterior. Aplicando os conhecimentos deste modelo de arquitetura e outros, como Either no Typescript e TDD.',
			githubLink: 'https://github.com/GabrielCoutz/clean-architecture-pratica',
		},
		{
			title: 'API em Node.js',
			tecnologies: [
				'Typescript',
				'Javascript ES21',
				'JWT',
				'Node.js',
				'Vitest',
			],
			date: '02/2023 - 03/2023',
			description:
				'Possui todas operações CRUD nos dados do usuário, com autenticação por meio do JWT. Seu desenvolvimento teve como propósito, conhecer o Node.js, testes com Vitest e obter mais domínio do Typescript. Após seu término, fiz a hospedagem desta API na Vercel, e montei uma documentação de como utilizá-la, disponível no GitHub do projeto.',
			githubLink: 'https://github.com/GabrielCoutz/node-api',
		},
		{
			title: 'Sistema FULLSTACK de login',
			tecnologies: ['React', 'Next.js', 'Typescript', 'GraphQL', 'JWT', 'SASS'],
			date: '01/2023 - 02/2023',
			description:
				'Construí o Back & Front. O projeto é uma aplicação que possibilita cadastrar, alterar e deletar usuários, utilizando JWT para autenticação. O backend é servido pelas rotas de API do Next.js, e se comunica utilizando a linguagem GraphQL. No front, React e SASS são utilizados para a interface.',
			githubLink: 'https://github.com/GabrielCoutz/Login-com-JWT',
		},
		{
			title: 'Kairos',
			tecnologies: ['HTML5', 'CSS3', 'JS', 'PHP'],
			date: '12/2021 - 12/2022',
			description:
				'Plataforma de gestão de marketing desenvolvida para apresentação do meu TCC. Atuei como front & back, desenvolvendo-a dos wireframes, ao código. Pratiquei a validação de dados com JS, e como salvá-los, consultá-los e manipulá-los em um banco, livre de SQL Injection, com PHP. Assim como, o design responsivo e a interação constante com formulários.',
			githubLink: 'https://github.com/GabrielCoutz/Kairos-v2.github.io',
			externalLink: 'https://gabrielcoutz.github.io/Kairos-v2.github.io/',
		},
	];
}
