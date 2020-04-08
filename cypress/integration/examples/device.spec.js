describe('Device Tests', () => {
	it('720p', () => {
		cy.viewport(1280, 720);
		cy.visit('http://www.example.com');
	});

	it('1080p', () => {
		cy.viewport(1980, 1080);
		cy.visit('http://www.example.com');
	});

	it('iPhone X', () => {
		cy.viewport('iphone-x');
		cy.visit('http://www.example.com');
	});
});
