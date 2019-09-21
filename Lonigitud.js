metros = prompt(" Longitud en Metros que desea convertir")

var Pulgadas = 39.3701
var Pies = 3.28084
var Millas = 0.000621371
var Centimetros = 100
var Kilometros = 0.001


var resultadoPulgadas = parseFloat(metros)*parseFloat(Pulgadas)
var resultadoPies = parseFloat(metros)*parseFloat(Pies)
var resultadoMillas = parseFloat(metros)*parseFloat(Millas)
var resultadoCentimetros = parseFloat(metros)*parseFloat(Centimetros)
var resultadoKilometros = parseFloat(metros)*parseFloat(Kilometros)


console.log( ' Equivalencia en Pulgadas: ' + metros + ' m ' + ' * ' + Pulgadas +  ' = ' + resultadoPulgadas + ' pulgadas ')
console.log( ' Equivalencia en Pies: ' + metros + ' m ' + ' * ' + Pies +  ' = ' + resultadoPies + ' pies ')
console.log( ' Equivalencia en Millas: ' + metros + ' m ' + ' * ' + Millas +  ' = ' + resultadoMillas + ' millas ')
console.log( ' Equivalencia en Cetímetros: ' + metros + ' m ' + ' * ' + Centimetros +  ' = ' + resultadoCentimetros + ' cm ')
console.log( ' Equivalencia en Kilómetros: ' + metros + ' m ' + ' * ' + Kilometros +  ' = ' + resultadoKilometros + ' km ')

alert( ' Equivalencia en Pulgadas: ' + metros + ' m ' + ' * ' + Pulgadas +  ' = ' + resultadoPulgadas + ' pulgadas ')
alert( ' Equivalencia en Pies: ' + metros + ' m ' + ' * ' + Pies +  ' = ' + resultadoPies + ' pies ')
alert( ' Equivalencia en Millas: ' + metros + ' m ' + ' * ' + Millas +  ' = ' + resultadoMillas + ' millas ')
alert( ' Equivalencia en Cetímetros: ' + metros + ' m ' + ' * ' + Centimetros +  ' = ' + resultadoCentimetros + ' cm ')
alert( ' Equivalencia en Kilómetros: ' + metros + ' m ' + ' * ' + Kilometros +  ' = ' + resultadoKilometros + ' km ')