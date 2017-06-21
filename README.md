# Cotato Online Judge
![Cotato Logo](./cotato_banner.png)
> Free and Open Source Online Judge, including a public API, Client and an Admin platform, powered by GraphQL and Angular.

## Work In Progress
This project is still under developement, contributers are welcome.

## About
Cotato is a generic Online Judge to host competitive programming contest, online or onsite.
The project include both the API, and the Client, with a potential admin platform.

#### The stack
Cotato is built using bunch of awesome Open Source Projects, such as:
- [GraphQL.js](http://graphql.org/graphql-js/) - API's query language
- [Express.js](https://expressjs.com/) `v4.x` - Fast, unopinionated, minimalist web framework
- [Apollo Client](http://dev.apollodata.com/) - GraphQL client for angular
- [Angular](https://angular.io/) `v4.x` - Structural framework for the Client side

## Installation
Cotato consists of 2 projects, the API and the client.

### Prerequisites

The project is built using node, therefore make sure that you have `node` (v6.x) and `npm` (v3.x) on your machine.

Additionally at this stage, it uses [python2](https://www.python.org/) to run the source codes, so make sure you have it installed, to make sure it's v2, you can run:

	$ `python --version` 


### Clone the repository

	$ git clone https://github.com/mrtensai/cotato.io
	$ cd cotato.io

### API

Following is how to get the api up and running:

	$ cd api.cotato.io
	$ yarn
	$ gulp build
	$ gulp serve:prod

To run the API in dev (watch) mode, run

	$ gulp serve

The API listens on [http://localhost:4242/graphql](http://localhost:4242/graphql)

### Client

The client use [angular-cli](https://github.com/angular/angular-cli), and this is how to get the client up and running:

	$ cd client.cotato.io
	$ npm install
	$ npm start

The Client can be accessed through [http://localhost:4200/](http://localhost:4200/)

## Work in Progress

The project is still in the POC state, here's a list of the upcoming features:
- Running a source code on an Input file
- Output comparison
- Problem Judging (AC, WA)
- Authentication


The project also needs some technical enhancement:
- API Build tools enhancements
- API testing
- Container support (Docker)
- Persistence

### Because potatoes can code too
<p align="center">
  <img src="http://i.imgur.com/F13Vror.gif" alt="cotatoes"/>
</p>
