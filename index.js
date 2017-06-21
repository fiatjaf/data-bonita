function createHandler(divisor,noun,restOfString){
  return function(diff){
    var n = Math.floor(diff/divisor);
    var pluralizedNoun = noun + ( n > 1 ? 's' : '' );
    if (pluralizedNoun == 'mêss') { pluralizedNoun = 'meses' }
    return "" + n + " " + pluralizedNoun + " " + restOfString;
  }
}

var formatters = [
  { threshold: 1,    handler: function(){ return    "agora" }        },
  { threshold: 60,     handler: createHandler(1,    "segundo",   "atrás" ) },
  { threshold: 3600,   handler: createHandler(60,     "minuto",  "atrás" ) },
  { threshold: 86400,  handler: createHandler(3600,   "hora",    "atrás" ) },
  { threshold: 172800,   handler: function(){ return    "ontem" }        },
  { threshold: 604800,   handler: createHandler(86400,  "dia",     "atrás" ) },
  { threshold: 2592000,  handler: createHandler(604800,   "semana",  "atrás" ) },
  { threshold: 31536000, handler: createHandler(2592000,  "mês",     "atrás" ) },
  { threshold: Infinity, handler: createHandler(31536000, "ano",     "atrás" ) }
];

var delta = function (date) {
  if (typeof date == 'number') {
    date = new Date(date)
  }

  var diff = (((new Date()).getTime() - date.getTime()) / 1000);
  for( var i=0; i<formatters.length; i++ ) {
    if ( diff < formatters[i].threshold ) {
      return formatters[i].handler(diff);
    }
  }
  throw new Error("exhausted all formatter options, none found"); // should never be reached
}

var months = [
  'janeiro',
  'fevereiro',
  'março',
  'abril',
  'maio',
  'junho',
  'julho',
  'agosto',
  'setembro',
  'outubro',
  'novembro',
  'dezembro'
]

var fulldate = function (date, time) {
  if (typeof date == 'number') {
    date = new Date(date)
  }
  var x = date;

  var prettyDate = x.getDate() + ' de ' + months[x.getMonth()] + ' de ' + x.getFullYear()
  if (!time) {
    return prettyDate
  }
  else {
    var hours = x.getHours()
    var horas = hours > 1 ? ', às ' + hours + ' horas e ' : ', à 1 hora e '
    var minutes = x.getMinutes()
    var minutos = minutes > 1 ? minutes + ' minutos' : '1 minuto'

    var prettyTime = horas + minutos
    return prettyDate + prettyTime
  }
}

module.exports.format = delta
module.exports.delta = delta
module.exports.abs = fulldate
module.exports.stringify = fulldate
