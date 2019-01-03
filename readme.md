# parseHttpDate

Parses date-times which have the preferred format [as defined by HTTP/1.1](https://tools.ietf.org/html/rfc7231#section-7.1.1.1). An example of such a date-time is:

> Tue, 15 Nov 1994 08:12:31 GMT

This format is used in HTTP headers such as _Date_, _Last-Modified_, and _Expires_. It is a subset of the specification used by the [Internet Message Format](https://tools.ietf.org/html/rfc5322). Note that the HTTP/1.1 specification also defines two obsolete formats, which this implementation does not support.

## Usage

```javascript
import parseHttpDate from 'parsehttpdate';

parseHttpDate('Wed, 21 Oct 2015 07:28:00 GMT');
```

### Combined with [fetch](https://developer.mozilla.org/docs/Web/API/Fetch_API)

This is how you can determine the time according to your server:

```javascript
import parseHttpDate from 'parsehttpdate';

fetch('/')
.then(({headers}) => {
	if (headers.has('Date')) {
		return headers.get('Date');
	} else /* if (false == headers.has('Date')) */ {
		throw new Error('The response lacks a Date header');
	}
})
.then(parseHttpDate)
.then(date => {
	console.log(date.toTimeString());
});
```

This is the same example using an [async function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function):

```javascript
import parseHttpDate from 'parsehttpdate';

async function getServerDate() {
	const {headers} = await fetch('/');
	if (headers.has('Date')) {
		return parseHttpDate(headers.get('Date'));
	} else /* if (false == headers.has('Date')) */ {
		throw new Error('The response lacks a Date header');
	}
}

getServerDate()
.then(date => {
	console.log(date.toTimeString());
});
```

### Advanced usage

If you are fairly certain the input is formatted correctly, you can squeeze out some extra performance by turning off validation.

```javascript
import parseHttpDate from 'parsehttpdate';

parseHttpDate('Wed, 21 Oct 2015 07:28:00 GMT', false);
```

## ISO 8601 timestamps

Does your date-time look nothing like the example above, but rather something like this?

> 1994-11-06T08:49:37Z

Congratulations: your date-time is formatted [according to ISO 8601](http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.1.15). _You don't need parseHttpDate_. You don't need any library.

```javascript
new Date('1994-11-06T08:49:37Z');
```

## License (X11/MIT)
Copyright (c) 2018 Pimm "de Chinchilla" Hogeling

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

**The Software is provided "as is", without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose and noninfringement. in no event shall the authors or copyright holders be liable for any claim, damages or other liability, whether in an action of contract, tort or otherwise, arising from, out of or in connection with the Software or the use or other dealings in the Software.**
