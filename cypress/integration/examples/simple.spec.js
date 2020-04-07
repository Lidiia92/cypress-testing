describe('Browser Actions', () => {
	it('should load books website', () => {
		cy.visit('http://books.toscrape.com/index.html');
		cy.url().should('include', 'index.html');
	});

	it('should click on travel category', () => {
		cy.get('a').contains('Travel').click();

		cy.get('h1').contains('Travel');
	});
});
