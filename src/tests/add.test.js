const add = (a, b) => a + b;

// Passing in two arguments, string and arrow function with test cases
test('should add two numbers', () => {
	const result = add(3, 4);

	//assertion
	if (result !== 7) {
		throw new Error(`You added 4 and 3 result was ${result}. Expected 7`);
	}
});
