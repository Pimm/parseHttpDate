/**
 * @jest-environment node
 */

const parseHttpDate = require('..');

test('validating', () => {
	// Validation is implicitly turned on. (Note that the format is incorrect.)
	expect(parseHttpDate.bind(undefined, '2015-10-21T07:28:00.000Z'))
	.toThrow();
	// Validation is explicitly turned on.
	expect(parseHttpDate.bind(undefined, '2015-10-21T07:28:00.000Z', true))
	.toThrow();
	// Validation is turned off.
	expect(parseHttpDate.bind(undefined, '2015-10-21T07:28:00.000Z', false))
	.not.toThrow();
});