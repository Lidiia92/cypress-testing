describe('Keyboard press simulator', () => {
	it('should submit searchbox with pressing enter key', () => {
		cy.visit('http://zero.webappsecurity.com/index.html');

		cy.get('#searchTerm').type('test text {enter}');
	});
});
