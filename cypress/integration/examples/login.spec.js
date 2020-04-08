describe('Working with inputs', () => {
	it('should load login page', () => {
		cy.visit('http://zero.webappsecurity.com/login.html');
	});

	it('should fill username', () => {
		//Variables
		cy.get('#user_login').as('username');
		cy.get('@username').clear();
		cy.get('@username').type('Test name', { delay: 100 });
	});

	it('should fill password', () => {
		cy.get('#user_password').clear();
		cy.get('#user_password').type('test1234');
	});

	it('should mark check box', () => {
		cy.get('input[type="checkbox"]').click();
		cy.wait(3000);
	});

	it('should submit the login form', () => {
		cy.contains('Sign in').click();
	});

	it('should display error message', () => {
		cy.get('.alert-error').should('be.visible');
	});
});
