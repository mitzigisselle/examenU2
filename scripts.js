var Examen = /** @class */ (function () {
    function Examen() {
    }
    Examen.prototype.ejercicio1 = function () {
        document.write("Hola mundo");
    };
    Examen.prototype.ejercicio2 = function (hola) {
        hola = "hola mundo";
        document.write(hola);
        return hola;
    };
    Examen.prototype.ejercicio3 = function (nombre) {
        nombre = prompt("Ingresa tu nombre");
        document.write("Hola " + nombre);
        return nombre;
    };
    Examen.prototype.ejercicio4 = function (nombre, numero) {
        nombre = prompt("Ingresa tu nombre");
        numero = prompt("Ingresa un numero");
        for (var i = 0; i < numero; i++) {
            document.write(nombre + "<br>");
        }
    };
    Examen.prototype.ejercicio5 = function (nombre) {
        nombre = prompt("Ingresa tu nombre completo");
        document.write(nombre.toLowerCase() + "<br>");
        document.write(nombre.toUpperCase() + "<br>");
        document.write(nombre.replace(/\b[a-z]/g, function (c) { return c.toUpperCase(); }));
    };
    Examen.prototype.ejercicio6 = function (edad) {
        edad = prompt("Ingresa tu edad");
        if (edad >= 18) {
            document.write("Eres mayor de edad");
        }
        else {
            document.write("Eres menor de edad");
        }
    };
    Examen.prototype.ejercicio7 = function (pass, password) {
        password = "hola";
        pass = prompt("Ingresa la contraseña");
        pass = pass.toLowerCase();
        if (password == pass) {
            alert("La contraseña es correcta");
        }
        else {
            alert("La contraseña es incorrecta");
        }
    };
    Examen.prototype.ejercicio8 = function (numero) {
        numero = prompt("ingrese una palabra");
        for (var i = 0; i < 10; i++) {
            document.write(numero + "<br>");
        }
    };
    Examen.prototype.ejercicio9 = function (edad) {
        edad = prompt("Ingresa tu edad");
        for (var i = 0; i < edad; i++) {
            document.write((i + 1) + " Años " + "<br>");
        }
    };
    Examen.prototype.ejercicio10 = function (inversion, interes, years) {
        inversion = prompt("Ingresa la cantidad a invertir");
        interes = prompt("Ingrese el interes");
        years = prompt("Ingrese los años");
        for (var i = 0; i < years; i++) {
            inversion *= 1 + interes / 100;
            document.write("Capital: " + (i + 1) + " años: " + inversion);
        }
    };
    Examen.prototype.ejecutar = function () {
        var hola;
        var nombre;
        var numero;
        var edad;
        var pass;
        var password;
        var inversion;
        var interes;
        var years;
        var opcion = prompt("Selecciona un opci\u00F3n:\n                                1.- Ejercicio 1\n                                2.- Ejercicio 2\n                                3.- Ejercicio 3\n                                4.- Ejercicio 4\n                                5.- Ejercicio 5\n                                6.- Ejercicio 6\n                                7.- Ejercicio 7\n                                8.- Ejercicio 8\n                                9.- Ejercicio 9\n                                10.- Ejercicio 10 ");
        opcion = parseInt(opcion);
        switch (opcion) {
            case 1:
                this.ejercicio1();
                break;
            case 2:
                this.ejercicio2(hola);
                break;
            case 3:
                this.ejercicio3(nombre);
                break;
            case 4:
                this.ejercicio4(nombre, numero);
                break;
            case 5:
                this.ejercicio5(nombre);
                break;
            case 6:
                this.ejercicio6(edad);
                break;
            case 7:
                this.ejercicio7(pass, password);
                break;
            case 8:
                this.ejercicio8(numero);
                break;
            case 9:
                this.ejercicio9(edad);
                break;
            case 10:
                this.ejercicio10(inversion, interes, years);
                break;
        }
    };
    return Examen;
}());
var ExamenU2 = new Examen();
ExamenU2.ejecutar();
