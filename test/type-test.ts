import parseHttpDate from '..';

// This file is used to test the type definitions in `index.d.ts`.

export function basics(): Array<Date> {
	return [
		parseHttpDate(
			'Wed, 21 Oct 2015 07:28:00 GMT',
		),
		parseHttpDate(
			'Wed, 21 Oct 2015 07:28:00 GMT',
			true
		),
		parseHttpDate(
			'Wed, 21 Oct 2015 07:28:00 GMT',
			false
		)
	];
}