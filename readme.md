# parseHttpDate

Parses dates which have the preferred format [as defined by HTTP/1.1](https://tools.ietf.org/html/rfc7231#section-7.1.1.1). An example of such a date is:

> Tue, 15 Nov 1994 08:12:31 GMT

This format is used in HTTP headers such as _Date_, _Last-Modified_, and _Expires_. It is a subset of the date and time specification used by the [Internet Message Format](https://tools.ietf.org/html/rfc5322). Note that the HTTP/1.1 specification also defines two obsolete formats, which this implementation does not support.

## Usage

```javascript
import parseHttpDate from 'parseHttpDate';

parseHttpDate('Wed, 21 Oct 2015 07:28:00 GMT');
```

## License (X11/MIT)
Copyright (c) 2018 Pimm "de Chinchilla" Hogeling

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

**The Software is provided "as is", without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose and noninfringement. in no event shall the authors or copyright holders be liable for any claim, damages or other liability, whether in an action of contract, tort or otherwise, arising from, out of or in connection with the Software or the use or other dealings in the Software.**
