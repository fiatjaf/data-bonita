data-bonita
===============

A fork of [pretty-date](https://www.npmjs.org/package/pretty-date) that outputs in portuguese.

## Usage

`npm install data-bonita`

```javascript
> var bonita = require("data-bonita");
> console.log(bonita.delta(new Date("Fri Aug 23 2013 17:30:34 GMT+0200 (EET)")));
1 ano atrás
> console.log(bonita.abs(new Date("Fri Aug 23 2013 17:30:34 GMT+0200 (EET)")));
23 de Agosto de 2013
```

## .delta(date)
```javascript
console.log( bonita.delta( new Date())); 
console.log( bonita.delta( new Date( new Date() - 1*1000 ))); 
console.log( bonita.delta( new Date( new Date() - 2*1000 )));
console.log( bonita.delta( new Date( new Date() - 60*1000 )));
console.log( bonita.delta( new Date( new Date() - 2*60*1000 )));
console.log( bonita.delta( new Date( new Date() - 60*60*1000 )));
console.log( bonita.delta( new Date( new Date() - 2*60*60*1000 )));
console.log( bonita.delta( new Date( new Date() - 24*60*60*1000 )));
console.log( bonita.delta( new Date( new Date() - 2*24*60*60*1000 )));
console.log( bonita.delta( new Date( new Date() - 30*24*60*60*1000 )));
console.log( bonita.delta( new Date( new Date() - 2*30*24*60*60*1000 )));
console.log( bonita.delta( new Date( new Date() - 365*24*60*60*1000 )));
console.log( bonita.delta( new Date( new Date() - 2*365*24*60*60*1000 )));

/* outputs
1 segundo atrás
2 segundos atrás
1 minuto atrás
2 minutos atrás
1 hora atrás
2 horas atrás
ontem
2 dias atrás
1 mês atrás
2 meses atrás
1 ano atrás
2 anos atrás
*/
```

## .abs(date)
```javascript
console.log( bonita.delta( new Date())); 
console.log( bonita.delta( new Date( new Date() - 1*1000 ))); 
console.log( bonita.delta( new Date( new Date() - 2*1000 )));
console.log( bonita.delta( new Date( new Date() - 60*1000 )));
console.log( bonita.delta( new Date( new Date() - 2*60*1000 )));
console.log( bonita.delta( new Date( new Date() - 60*60*1000 )));
console.log( bonita.delta( new Date( new Date() - 2*60*60*1000 )));
console.log( bonita.delta( new Date( new Date() - 24*60*60*1000 )));
console.log( bonita.delta( new Date( new Date() - 2*24*60*60*1000 )));
console.log( bonita.delta( new Date( new Date() - 30*24*60*60*1000 )));
console.log( bonita.delta( new Date( new Date() - 2*30*24*60*60*1000 )));
console.log( bonita.delta( new Date( new Date() - 365*24*60*60*1000 )));
console.log( bonita.delta( new Date( new Date() - 2*365*24*60*60*1000 )));

/* outputs
3 de Setembro de 2014
3 de Setembro de 2014
3 de Setembro de 2014
3 de Setembro de 2014
3 de Setembro de 2014
3 de Setembro de 2014
2 de Setembro de 2014
1 de Setembro de 2014
4 de Agosto de 2014
5 de Julho de 2014
3 de Setembro de 2013
3 de Setembro de 2012
*/
```
