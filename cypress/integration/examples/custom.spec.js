describe('Custom Commands', () => {
	it('should login to the applcation using custom cypress command', () => {
		cy.visit('http://zero.webappsecurity.com/login.html');
		cy.login('username', 'password');
	});
});
