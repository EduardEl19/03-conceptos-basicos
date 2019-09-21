//Area del Triangulo
baseTriangulo = prompt("Triángulo: ¿Cuál es su base? ")
alturaTriangulo = prompt("Triángulo: ¿Cuál es su altura? ")

var resultadoTrianguloA = parseFloat(baseTriangulo)*parseFloat(alturaTriangulo)/2
            
console.log(' El área del Triángulo es: ' + ' ( ' + baseTriangulo + ' * ' + alturaTriangulo + ' ) ' + ' / 2 ' + ' = ' + resultadoTrianguloA)
alert(' El área del Triángulo es: ' + ' ( ' + baseTriangulo + ' * ' + alturaTriangulo + ' ) ' + ' / 2 ' + ' = ' + resultadoTrianguloA)


//Perimetro del Triangulo
lado1Triangulo = prompt("Trángulo: ¿Cuanto mide su 1er lado? ")
lado2Triangulo = prompt("Trángulo: ¿Cuanto mide su 2do lado? ")
lado3Triangulo = prompt("Trángulo: ¿Cuanto mide su 3er lado? ")
            
var resultadoTrianguloP = parseFloat(lado1Triangulo)+parseFloat(lado2Triangulo)+parseFloat(lado3Triangulo)

console.log(' El perimetro del Triángulo es: ' + lado1Triangulo + ' + ' + lado2Triangulo + ' + ' + lado3Triangulo + ' = ' + resultadoTrianguloP)
alert(' El perimetro del Triángulo es: ' + lado1Triangulo + ' + ' + lado2Triangulo + ' + ' + lado3Triangulo + ' = ' + resultadoTrianguloP)


//Area del Circulo
radioCirculo = prompt("Círculo: ¿Cual es su radio? ")

var pi = 3.1416
var resultadoRadioCuadradoCirculo = parseFloat(radioCirculo)*parseFloat(radioCirculo)
var resultadoCirculoA = parseFloat(resultadoRadioCuadradoCirculo)*parseFloat(pi)

console.log(' El área del Círculo es: ' + ' ( ' + radioCirculo + ' * ' + radioCirculo + ' ) ' + ' * ' + pi + ' = ' +  resultadoCirculoA)
alert(' El área del Círculo es: ' + ' ( ' + radioCirculo + ' * ' + radioCirculo + ' ) ' + ' * ' + pi + ' = ' +  resultadoCirculoA)


//Perimetro del Circulo
diametroCirculo = prompt("Círculo: ¿Cuanto mide el diametro? " )

var resultadoCirculoP = parseFloat(diametroCirculo)*parseFloat(pi)

console.log(' El perimetro del Círculo es: ' + diametroCirculo + ' * ' + pi + ' = ' + resultadoCirculoP)
alert(' El perimetro del Círculo es: ' + diametroCirculo + ' * ' + pi + ' = ' + resultadoCirculoP)


//Area del Rectangulo
baseRectangulo = prompt("Rectángulo: ¿Cuanto mide la base? ")
alturaRectangulo = prompt("Rectángulo: ¿Cuanto mide la altura? ")

var resultadoRectanguloA = parseFloat(baseRectangulo)*parseFloat(alturaRectangulo)

console.log(' El área del Rectángulo es: ' + baseRectangulo + ' * ' + alturaRectangulo + ' = ' + resultadoRectanguloA)
alert(' El área del Rectángulo es: ' + baseRectangulo + ' * ' + alturaRectangulo + ' = ' + resultadoRectanguloA)


//Perimetro del Rectangulo
lado1Rectangulo = prompt("Rectángulo: ¿Cuanto mide el 1er lado? ")
lado2Rectangulo = prompt("Rectángulo: ¿Cuanto mide el 2do lado? ")

var resultadoRectanguloBase = parseFloat(lado1Rectangulo)*2
var resultadoRectanguloAltura = parseFloat(lado2Rectangulo)*2
var resultadoRectanguloP = parseFloat(resultadoRectanguloBase)+parseFloat(resultadoRectanguloAltura)

console.log(' El perimetro del Rectángulo es: ' + ' ( ' + lado1Rectangulo + ' * 2 ' + ' ) ' + ' + ' + ' ( ' + lado2Rectangulo + ' * 2 ' + ' ) ' + ' = ' + resultadoRectanguloP)
alert(' El perimetro del Rectángulo es: ' + ' ( ' + lado1Rectangulo + ' * 2 ' + ' ) ' + ' + ' + ' ( ' + lado2Rectangulo + ' * 2 ' + ' ) ' + ' = ' + resultadoRectanguloP)


//Area del Trapecio
baseMenorTrapecio = prompt("Trapecio: ¿Cuanto mide la base menor? ")
baseMayorTrapecio = prompt("Trapecio: ¿Cuanto mide la base mayor? ") 
alturaTrapecio = prompt("Trapecio: ¿Cuanto mide la altura? ")

var baseTotalTrapecio = parseFloat(baseMenorTrapecio)+parseFloat(baseMayorTrapecio)
var resultadoTrapecioMulti = parseFloat(baseTotalTrapecio)*parseFloat(alturaTrapecio)
var resultadoTrapecioA = parseFloat(resultadoTrapecioMulti)/2

console.log(' El área del Trapecio es: ' + ' ( ' + baseMenorTrapecio + ' + ' + baseMayorTrapecio + ' ) ' + ' * ' + ' ( ' + alturaTrapecio + ' ) ' + ' / 2 ' + ' = ' + resultadoTrapecioA)
alert(' El área del Trapecio es: ' + ' ( ' + baseMenorTrapecio + ' + ' + baseMayorTrapecio + ' ) ' + ' * ' + ' ( ' + alturaTrapecio + ' ) ' + ' / 2 ' + ' = ' + resultadoTrapecioA)


//Perimetro del Trapecio
lado1Trapecio = prompt("Trapecio: ¿Cuanto mide el 1er lado? ")
lado2Trapecio = prompt("Trapecio: ¿Cuanto mide el 2do lado? ")
lado3Trapecio = prompt("Trapecio: ¿Cuanto mide el 3er lado? ")
lado4Trapecio = prompt("Trapecio: ¿Cuanto mide el 4to lado? ")

var resultadoTrapecioP = parseFloat(lado1Trapecio)+parseFloat(lado2Trapecio)+parseFloat(lado3Trapecio)+parseFloat(lado4Trapecio)

console.log(' El perimetro del Trapecio es: ' + lado1Trapecio + ' + ' + lado2Trapecio + ' + ' + lado3Trapecio + ' + ' + lado4Trapecio + ' = ' + resultadoTrapecioP)
alert(' El perimetro del Trapecio es: ' + lado1Trapecio + ' + ' + lado2Trapecio + ' + ' + lado3Trapecio + ' + ' + lado4Trapecio + ' = ' + resultadoTrapecioP)