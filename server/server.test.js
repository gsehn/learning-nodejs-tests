const request = require('supertest');
const server = require('./server');
const expect = require('expect');

const app = server.app;

describe('server', () => {

	describe('GET /', () => {
		it('should return Hello World!', (done) => {
			request(app).get('/')
			.expect(404)
			.expect((res) => {
				expect(res.body).toInclude({
					error: 'Page not found.'
				});
			})
			.end(done);
		});
	});

	describe('GET /users', () => {
		it('should return 3 users named A, B, C, with age 25, 30 and 35', (done) => {
			request(app).get('/users')
			.expect(200)
			.expect((res) => {
				expect(res.body)
				.toInclude({
					name: 'User A',
					age: 25
				})
				.toInclude({
					name: 'User B',
					age: 30
				});
			})
			.end(done);
		});		
	});
});
