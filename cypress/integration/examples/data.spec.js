describe('Write / Read data to JSON / Text file', () => {
	it('should write data into JSON', () => {
		cy.writeFile('log.json', { name: 'Mike', age: 25 });
	});

	it('should write data into text file', () => {
		cy.writeFile('log.txt', 'Test text');
	});
});
