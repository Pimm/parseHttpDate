/**
 * Parses the passed date which has the preferred format as defined by HTTP/1.1. An example of such a date is:
 *
 *   Tue, 15 Nov 1994 08:12:31 GMT
 *
 * This format is a subset of the date and time specification used by the Internet Message Format. Note that the
 * specification also defines two obsolete formats, which this implementation does not support.
 *
 * @param {string} value - The date, represented as a string in a certain format.
 * @param {boolean=} validate - Whether the passed date should be validated before being parsed. Not validating (false)
 *                              is faster, but behaviour is undefined if the passed date is not formatted correctly.
 *                              Validating (true, default) causes an error to be thrown if the passed date is not
 *                              formatted correctly.
 * @return {Date} The parsed date.
 */
declare function parseHttpDate(value: string, validate?: boolean): Date;

export = parseHttpDate;