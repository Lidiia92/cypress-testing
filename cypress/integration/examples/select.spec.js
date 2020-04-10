describe('Select Box', () => {
	it('should load the website with select box', () => {
		cy.visit('https://devexpress.github.io/testcafe/example/');
	});

	it('shoult select an option from select box', () => {
		cy.get('#preferred-interface').select('Both');
		cy.get('#preferred-interface').should('have.value', 'Both');
	});
});
