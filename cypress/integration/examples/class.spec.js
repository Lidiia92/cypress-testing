class BasePage {
	static loadHomePage() {
		cy.visit('https://devexpress.github.io/testcafe/example/');
	}

	static wait(number) {
		cy.wait(number);
	}
}

class HomePage extends BasePage {
	static scrollToBottom() {
		cy.get('#submit-button').scrollIntoView();
	}

	static scrollToTop() {
		cy.get('header').scrollIntoView();
	}
}

describe('Abstraction with Classes', () => {
	before(function () {
		// runs before all tests inside describe
		// setup test data or test context
		// send or reset the database

		HomePage.loadHomePage();
	});

	after(function () {
		// runs after all tests inside describe block
		// test cleanup
		// clean cookies, local storage
	});

	beforeEach(function () {
		// runs before each it block in the describe block
	});

	afterEach(function () {
		// runs after each it block in the describe block
	});

	it.skip('1st "IT" it should scroll down and up on the page', () => {
		HomePage.scrollToBottom();
		HomePage.wait(5000);
		HomePage.scrollToTop();
		HomePage.wait(3000);
	});

	// run only this test
	it.only('2nd "IT" should scroll down and up on the page', () => {
		HomePage.scrollToBottom();
		HomePage.wait(5000);
		HomePage.scrollToTop();
		HomePage.wait(3000);
	});
});
