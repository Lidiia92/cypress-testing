describe('Working with inputs', () => {
	it('should overwrite the current time', () => {
		//Returns a time stamp
		const date = new Date(2020, 3, 10).getTime();
		cy.clock(date);
		cy.log(date);
	});

	it('should load login page', () => {
		cy.visit('http://zero.webappsecurity.com/login.html');

		//Clearing cookie if needed
		cy.clearCookies({ log: true });
		cy.clearLocalStorage('your items in local storage', { log: true });
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
		cy.get('.alert-error')
			.should('be.visible')
			.and('contain', 'Login and/or password are wrong');
	});
});
