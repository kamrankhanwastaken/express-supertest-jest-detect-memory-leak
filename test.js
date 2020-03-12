const express = require('express');
const request = require('supertest');
describe('leak', () => {

	let port;
	let app;
	let server;

	beforeAll(() => {
		port = 3000;
		app = new express();
		server = app.listen(port);
	});

	afterAll(() => {
		server.close();
	})
	test('leak test', async () => {
		let res = await request(server).get('/');
		expect(res.status).toBe(404);
	});
})