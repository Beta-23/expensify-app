const add = (a, b) => a + b;

// Passing in two arguments, string and arrow function with test cases
test('should add two numbers', () => {
	const result = add(3, 4);
	expect(result).toBe(7); //assertion
});
