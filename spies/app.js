let db = require('./db');

module.exports.handleSignup = (email, password) => {
	// Check if email exists
	// Save the user
	db.saveUser({
		email,
		password
	});
	// Send welcome message
};
