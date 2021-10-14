class Examen{
    public ejercicio1(){
        document.write("Hola mundo");
    }

    public ejercicio2(hola : string) : string {
        hola = "hola mundo";
        document.write(hola);
        return hola;

    }
    public ejercicio3(nombre : any) : string {
        nombre = prompt("Ingresa tu nombre");
        document.write("Hola " + nombre);
        return nombre

    }
    public ejercicio4(nombre : any, numero : any) : any {
        nombre = prompt("Ingresa tu nombre");
        numero = prompt("Ingresa un numero");

        for(let i = 0; i < numero; i++){
            document.write(nombre + "<br>");
        } 

    }
    public ejercicio5(nombre : any) : any {
        nombre = prompt("Ingresa tu nombre completo");
        document.write(nombre.toLowerCase() + "<br>");
        document.write(nombre.toUpperCase() + "<br>");
        document.write(nombre.replace(/\b[a-z]/g, (c: string)=>c.toUpperCase()));

    }
    public ejercicio6(edad : any) : any {
        edad = prompt("Ingresa tu edad");
        if (edad >= 18) {
            document.write("Eres mayor de edad");
        } else {
            document.write("Eres menor de edad");
        }

    }
    public ejercicio7(pass : any, password : any) : any {
        password = "hola";
        pass = prompt("Ingresa la contraseña")
        pass = pass.toLowerCase()
        if (password == pass) {
            alert("La contraseña es correcta")
        } else {
            alert("La contraseña es incorrecta")
        }

    }
    public ejercicio8(numero : any) : any {
       numero = prompt("ingrese una palabra");
       for (let i = 0; i < 10; i++) {
        document.write(numero + "<br>");
        
    }

    }
    public ejercicio9(edad : any) : any {
        edad = prompt("Ingresa tu edad");
        for (let i = 0; i < edad; i++) {
            document.write((i + 1) + " Años " + "<br>")
            
        }
    }
    public ejercicio10(inversion : any, interes : any, years: any ) : any {
       inversion = prompt("Ingresa la cantidad a invertir");
       interes = prompt("Ingrese el interes");
       years = prompt("Ingrese los años");

       for (let i = 0; i < years; i++) {
        inversion *= 1 + interes / 100;
        document.write("Capital: " + (i+1) + " años: " + inversion)
        }

    }

    public ejecutar(): void {
        let hola : any;
        let nombre: any;
        let numero: any;
        let edad: any;
        let pass: any;
        let password: any;
        let inversion: any;
        let interes : any;
        let years : any;
        let opcion : any = prompt(`Selecciona un opción:
                                1.- Ejercicio 1
                                2.- Ejercicio 2
                                3.- Ejercicio 3
                                4.- Ejercicio 4
                                5.- Ejercicio 5
                                6.- Ejercicio 6
                                7.- Ejercicio 7
                                8.- Ejercicio 8
                                9.- Ejercicio 9
                                10.- Ejercicio 10 `);
        opcion = parseInt(opcion);
        switch(opcion) {
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
    }

}

const ExamenU2 = new Examen();
ExamenU2.ejecutar();
