describe('Xpaths with Cypress example', () => {
	before(function () {
		cy.visit('http://zero.webappsecurity.com/');
	});

	it('should click on element using xpath', () => {
		cy.xpath('//button[@id="signin_button"]').should('be.visible');
		cy.xpath('//button[@id="signin_button"]').click();
	});

	it('should display login form', () => {
		cy.xpath('//form').should('have.length', 1);
	});
});
