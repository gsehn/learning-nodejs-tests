const expect = require('expect');
const rewire = require('rewire');

const app = rewire('./app');

describe('app', () => {

	const db = {
		saveUser: expect.createSpy()
	};
	app.__set__('db', db);

	it('should call the spy correctly', () => {
		const spy = expect.createSpy();
		spy('User A', 25);
		expect(spy).toHaveBeenCalledWith('User A', 25);
	});

	it('should call saveUser with user object', () => {
		const email = 'gtsehn@gmail.com';
		const password = 'abc';

		app.handleSignup(email, password);
		expect(db.saveUser).toHaveBeenCalledWith({
			email,
			password
		});
	});
});
