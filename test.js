const express = require('express');
const request = require('supertest');
describe('leak', () => {

	let port;
	let server;

	beforeAll(() => {
		port = 3000;
		server = new express().listen(port);
	});

	afterAll(() => {
		server.close();
	})
	test('leak test', async () => {
		let res = await request(server).get('/');
		expect(res.status).toBe(404);
	});
})