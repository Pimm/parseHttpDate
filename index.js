// (The number of seconds may start with a 6 because of leap seconds.)
const validDateMatcher = /^[A-Z][a-z]{2}, [0-3]\d (?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) \d{4} [0-2]\d:[0-5]\d:[0-6]\d GMT$/;

//                   J F M A M J J A S O N D
const monthsNames = 'anebarprayunulugepctovec';
//                    u r c i   e y u t o e e
//                    a u h l       s e b m m
//                    r a           t m e b b
//                    y r             b r e e
//                      y             e   r r
//                                    r

/**
 * Parses the passed date-time which has the preferred format as defined by HTTP/1.1. An example of such a date-time
 * is:
 *
 * > Tue, 15 Nov 1994 08:12:31 GMT
 *
 * This format is a subset of the specification used by the Internet Message Format. Note that the specification also
 * defines two obsolete formats, which this implementation does not support.
 *
 * The second argument determines whether the passed date-time should be validated before being parsed. Not validating
 * (`false`) is faster, but behaviour is undefined if the passed date-time is not formatted correctly. Validating
 * (`true`, default) causes an error to be thrown if the passed date-time is not formatted correctly.
 */
export default function parseHttpDate(value, validate) {
	if (false != validate) {
		if (false == validDateMatcher.test(value)) {
			throw new Error('The passed value has an unexpected format');
		}
	}
	return new Date(Date.UTC(
		parseInt(value.substring(12, 16), 10),
		// (Skip over the first character of the month abbreviation, as we can safely detect the name by the second and
		// third character only.)
		monthsNames.indexOf(value.substring(9, 11)) >> 1,
		parseInt(value.substring(5, 7), 10),
		parseInt(value.substring(17, 19), 10),
		parseInt(value.substring(20, 22), 10),
		parseInt(value.substring(23, 25), 10)
	));
};
