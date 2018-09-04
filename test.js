const parseHttpDate = require('.');

test('parseHttpDate', () => { 
	expect(parseHttpDate('Sun, 06 Nov 1994 08:49:37 GMT').toISOString()).toBe('1994-11-06T08:49:37.000Z');
	expect(parseHttpDate('Wed, 21 Oct 2015 07:28:00 GMT').toISOString()).toBe('2015-10-21T07:28:00.000Z');
	expect(parseHttpDate('Tue, 04 Jan 2018 13:01:35 GMT').toISOString()).toBe('2018-01-04T13:01:35.000Z');
	expect(parseHttpDate('Tue, 04 Feb 2018 13:01:35 GMT').toISOString()).toBe('2018-02-04T13:01:35.000Z');
	expect(parseHttpDate('Tue, 04 Mar 2018 13:01:35 GMT').toISOString()).toBe('2018-03-04T13:01:35.000Z');
	expect(parseHttpDate('Tue, 04 Apr 2018 13:01:35 GMT').toISOString()).toBe('2018-04-04T13:01:35.000Z');
	expect(parseHttpDate('Tue, 04 May 2018 13:01:35 GMT').toISOString()).toBe('2018-05-04T13:01:35.000Z');
	expect(parseHttpDate('Tue, 04 Jun 2018 13:01:35 GMT').toISOString()).toBe('2018-06-04T13:01:35.000Z');
	expect(parseHttpDate('Tue, 04 Jul 2018 13:01:35 GMT').toISOString()).toBe('2018-07-04T13:01:35.000Z');
	expect(parseHttpDate('Tue, 04 Aug 2018 13:01:35 GMT').toISOString()).toBe('2018-08-04T13:01:35.000Z');
	expect(parseHttpDate('Tue, 04 Sep 2018 13:01:35 GMT').toISOString()).toBe('2018-09-04T13:01:35.000Z');
	expect(parseHttpDate('Tue, 04 Oct 2018 13:01:35 GMT').toISOString()).toBe('2018-10-04T13:01:35.000Z');
	expect(parseHttpDate('Tue, 04 Nov 2018 13:01:35 GMT').toISOString()).toBe('2018-11-04T13:01:35.000Z');
	expect(parseHttpDate('Tue, 04 Dec 2018 13:01:35 GMT').toISOString()).toBe('2018-12-04T13:01:35.000Z');
});
