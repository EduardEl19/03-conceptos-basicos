celsius = prompt('Ingrese el numero de grados centigrados que desea convertir: ')

var kelvin = 274.15
var farenheit = 33.8

var resultadoKelvin = parseFloat(celsius) * parseFloat(kelvin)
var resultadoFarenheit = parseFloat(celsius) * parseFloat(farenheit)

console.log(' En la escala de Kelvin: ' + celsius + '°C' + '*' + kelvin + '=' + resultadoKelvin + 'K')
console.log(' En la escala de Farenheit: ' + celsius + '°C' + '*' + farenheit + '=' + resultadoFarenheit + '°F')

alert(' En la escala de Kelvin: ' + celsius + '°C' + '*' + kelvin + '=' + resultadoKelvin + 'K')
alert(' En la escala de Farenheit: ' + celsius + '°C' + '*' + farenheit + '=' + resultadoFarenheit + '°F')