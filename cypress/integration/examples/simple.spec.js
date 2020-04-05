describe('Browser Actions', () => {
	it('should load the correct URL', () => {
		cy.visit('http://example.com');
	});

	it('should check correct url', () => {
		cy.url().should('include', 'example.com');
	});

	it('should wait for 3 seconds', () => {
		cy.wait(3000);
	});

	it('should pause for 3 seconds', () => {
		cy.pause();
	});

	it('should check for correct element on the page', () => {
		cy.get('h1').should('be.visible');
	});
});
