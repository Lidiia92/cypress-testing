describe('Browser Actions', () => {
	it('should load books website', () => {
		cy.visit('http://books.toscrape.com/index.html');
		cy.url().should('include', 'index.html');
		cy.log('Website loaded');
	});

	it('should click on travel category', () => {
		cy.get('a').contains('Travel').click();

		cy.get('h1').contains('Travel');
	});

	it('should display correct number of books', () => {
		cy.get('.product_pod').its('length').should('equal', 11);
	});

	it('should click on poetry category', () => {
		cy.get('a').contains('Poetry').click();
	});

	it('should click on Olio book', () => {
		cy.get('a').contains('Olio').click();
	});

	it('should display correct price', () => {
		cy.get('.price_color').contains('£23.88');
	});
});
