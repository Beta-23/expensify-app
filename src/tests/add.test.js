const add = (a, b) => a + b;

const generalGreeting = (name = 'Anonymous') => `Hello ${name}!`;
// Passing in two arguments, string and arrow function with test cases
test('should add two numbers', () => {
	const result = add(3, 4);
	expect(result).toBe(7); //assertion
});

test('should return greeting from name', () => {
	const result = generalGreeting('Jordan');
	expect(result).toBe('Hello Jordan!');
});

test('should return greeting for no name', () => {
	const result = generalGreeting();
	expect(result).toBe('Hello Anonymous!');
});