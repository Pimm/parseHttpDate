# parsehttpdate &middot; [![Licentie (X11/MIT)](https://badgen.net/github/license/pimm/parseHttpDate)](https://github.com/Pimm/parseHttpDate/blob/master/copying.txt) [![npm versie](https://badgen.net/npm/v/parsehttpdate)](https://www.npmjs.com/package/parsehttpdate) [![Test status](https://github.com/Pimm/parseHttpDate/actions/workflows/test.yaml/badge.svg)](https://github.com/Pimm/parseHttpDate/actions/workflows/test.yaml) [![Coverage status](https://coveralls.io/repos/github/Pimm/parseHttpDate/badge.svg?branch=master)](https://coveralls.io/github/Pimm/parseHttpDate?branch=master)

Ontleedt de waarde van de `Date` header in HTTP antwoorden.

## Omschrijving

Ontleedt datum-tijdstippen van HTTP-headers zoals _Date_, _Last-Modified_, en _Expires_. Een voorbeeld van zo een datum-tijdstip is:

> Tue, 15 Nov 1994 08:12:31 GMT

Het formaat is [gedefinieerd door HTTP/1.1][http-1.1] (en [HTTP/1.0][http-1.0]) en is een subgroep van de specificatie die wordt gebruikt door in het [Internet Message Format][imf].

# Installatie

Installeer `parsehttpdate` met npm of Yarn en importeer de functie:
```javascript
import parseHttpDate from 'parsehttpdate';
```

Als alternatief kan `parsehttpdate` ook worden binnengehaald met unpkg:
```html
<script src="https://unpkg.com/parsehttpdate@^1.0.10"></script>
```
Met deze aanpak wordt de functie beschikbaar als `window.parseHttpDate`.

# Gebruik

```javascript
parseHttpDate('Wed, 21 Oct 2015 07:28:00 GMT');
```

### In combinatie met [fetch][mdn-fetch]

Op deze manier vind je de tijd volgens jouw server:

```javascript
import parseHttpDate from 'parsehttpdate';

fetch('/')
.then(({ headers }) => headers.get('Date'))
.then(parseHttpDate)
.then(date => {
	console.log(date.toTimeString());
});
```

Dit is hetzelfde voorbeeld met een [async-functie][mdn-async-function]:

```javascript
import parseHttpDate from 'parsehttpdate';

async function getServerDate() {
	const { headers } = await fetch('/');
	return parseHttpDate(headers.get('Date'));
}

getServerDate()
.then(date => {
	console.log(date.toTimeString());
});
```

### Geavanceerd gebruik

Als je er vrij zeker van bent dat de invoer is opgeschreven in het correcte formaat, kun je de prestaties nog iets verbeteren door validatie uit te zetten.

```javascript
parseHttpDate('Wed, 21 Oct 2015 07:28:00 GMT', false);
```

## Andere formaten

Ziet jouw datum-tijdstip er niet uit zoals het voorbeeld hierboven, maar meer zo?

> 1994-11-06T08:49:37Z

Gefeliciteerd: jouw datum-tijdstip is opgeschreven in het [ISO 8601][ecmascript-10-date-time]-formaat. _Je hebt deze bibliotheek niet nodig_. Je hebt geen enkele bibliotheek nodig:

```javascript
new Date('1994-11-06T08:49:37Z');
```

De HTTP/1.1-specificatie definieert ook twee verouderde formaten naast het aangerade formaat van de bovengenoemde voorbeelden:

> Sunday, 06-Nov-94 08:49:37 GMT

> Sun Nov  6 08:49:37 1994

Deze bibliotheek ondersteunt deze niet; sinds 1996 is het gebruik van het ondersteunde formaat aanbevolen. [Maak alsjeblieft een issue aan][issues] als je de overige toch nodig hebt.

## Licentie (X11/MIT)
Copyright (c) 2018-2021 Pimm "de Chinchilla" Hogeling

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

**The Software is provided "as is", without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose and noninfringement. in no event shall the authors or copyright holders be liable for any claim, damages or other liability, whether in an action of contract, tort or otherwise, arising from, out of or in connection with the Software or the use or other dealings in the Software.**


[http-1.1]: https://tools.ietf.org/html/rfc7231#section-7.1.1.1
[http-1.0]: https://tools.ietf.org/html/rfc1945#section-3.3
[imf]: https://tools.ietf.org/html/rfc5322
[ecmascript-10-date-time]: http://www.ecma-international.org/ecma-262/10.0/#sec-date-time-string-format
[mdn-fetch]: https://developer.mozilla.org/docs/Web/API/Fetch_API
[mdn-async-function]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function
[issues]: https://github.com/Pimm/parseHttpDate/issues