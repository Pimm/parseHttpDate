/**
 * Parses the passed date-time which has the preferred format as defined by HTTP/1.1. An example of such a date-time
 * is:
 *
 * > Tue, 15 Nov 1994 08:12:31 GMT
 *
 * The second argument determines whether the passed date-time should be validated before being parsed. Not validating
 * (`false`) is faster, but behaviour is undefined if the passed date-time is not formatted correctly. Validating
 * (`true`, default) causes an error to be thrown if the passed date-time is not formatted correctly.
 */
declare function parseHttpDate(value: string, validate?: boolean): Date;

export default parseHttpDate;