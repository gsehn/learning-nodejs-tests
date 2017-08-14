const utils = require('./utils');
const expect = require('expect');

it('should add two numbers', () => {
	const result = utils.add(33, 11);

	expect(result)
		.toBe(44)
		.toBeA('number');
});

it('should asyncAdd two numbers', (done) => {
	utils.asyncAdd(4, 3, (sum) => {
		expect(sum).toBeA('number').toBe(7);
		done();
	});
});

it('should square number', () => {
	const result = utils.square(2);

	expect(result)
		.toBe(4)
		.toBeA('number');
});

it('should asyncSquare number', (done) => {
	utils.asyncSquare(4, (result) => {
		expect(result).toBeA('number').toBe(16);
		done();
	});
});

it('should expect some values', () => {
	expect({name: 'Guenther'}).toBeA('object').toEqual({name: 'Guenther'});

	expect([2, 3, 4]).toInclude(4).toExclude(1);

	expect({
		name: 'Guenther',
		age: 36,
		location: "Brazil"
	}).toInclude({age: 36});
});

it('should split a full name with extra spaces correctly and set "firstName" and "lastName"', () => {
	const user = {
		firstName: '',
		lastName: '',
		location: 'Porto Alegre'
	};


	expect(utils.setName(user, " Guenther Sehn "))
		.toBeA('object')
		.toInclude({firstName: 'Guenther'})
		.toInclude({lastName: 'Sehn'});
});
