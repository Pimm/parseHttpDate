# parseHttpDate

Ontleedt datum-tijdstippen die zijn opgeschreven in het aangeraden formaat [gedefinieerd door HTTP/1.1](https://tools.ietf.org/html/rfc7231#section-7.1.1.1). Een voorbeeld van zo een datum-tijdstip is:

> Tue, 15 Nov 1994 08:12:31 GMT

Dit formaat zie je terug in HTTP-headers zoals _Date_, _Last-Modified_, en _Expires_. Het is een subgroep van de specificatie die wordt gebruikt door in het [Internet Message Format](https://tools.ietf.org/html/rfc5322). Let op: de HTTP/1.1-specificatie definieert ook twee verouderde formaten die niet worden ondersteund door deze implementatie.

## Gebruik

```javascript
import parseHttpDate from 'parsehttpdate';

parseHttpDate('Wed, 21 Oct 2015 07:28:00 GMT');
```

### In combinatie met [fetch](https://developer.mozilla.org/docs/Web/API/Fetch_API)

Op deze manier vind je de tijd volgens jouw server:

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

### Geavanceerd gebruik

Als je er vrij zeker van bent dat de invoer is opgeschreven in het correcte formaat, kun je de prestaties nog iets verbeteren door validatie uit te zetten.

```javascript
import parseHttpDate from 'parsehttpdate';

parseHttpDate('Wed, 21 Oct 2015 07:28:00 GMT', false);
```

## ISO 8601 tijdsaanduiding

Ziet jouw datum-tijdstip er niet uit zoals het voorbeeld hierboven, maar meer zo?

> 1994-11-06T08:49:37Z

Gefeliciteerd: jouw datum-tijdstip is opgeschreven in het [ISO 8601](http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.1.15)-formaat. _Je hebt parseHttpDate niet nodig_. Je hebt geen enkele bibliotheek nodig.

```javascript
new Date('1994-11-06T08:49:37Z');
```

## Licentie (X11/MIT)
Copyright (c) 2018 Pimm "de Chinchilla" Hogeling

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

**The Software is provided "as is", without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose and noninfringement. in no event shall the authors or copyright holders be liable for any claim, damages or other liability, whether in an action of contract, tort or otherwise, arising from, out of or in connection with the Software or the use or other dealings in the Software.**
