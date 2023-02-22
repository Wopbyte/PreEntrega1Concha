let password = '123445';
let gemas = 10000;
let bPerm = 2000;
let bProm = 4000;
let opc = 0;

function login() {

    let verify = false;
    for (let i = 3; i >= 1; i--) {
        let pwd = prompt("Ingrese su contraseña :D (Te quedan " + i + " intentos)");
        if (pwd === password) {
            alert("Ingresaste correctamente!");
            verify = true;
            break;
        }
        else {
            alert("Contraseña incorrecta");
        }
    }

    return verify;
}



if (login()) {

    let opc = parseInt(prompt("Ingresa el numero de la opcion: \n1) Revisar gemas. \n2) Abonar. \n3) Jugar Banner Permanente \n4) Jugar Banner Promocional. \n5)Salir"));

    do {

        if (opc > 5 || opc <= 0) {
            alert("Ingrese una opcion desde el 1 al 5")
        }
        else {

            switch (opc) {
                case 1:
                    alert("Tu gemas actual es de: " + gemas + " gemas");
                    break;

                case 2:
                    let abono = parseInt(prompt("Ingresa el monto a abonar:"))
                    if (Number.isNaN(abono)) {
                        alert("El valor ingresado no es un numero");
                    }
                    else {
                        gemas = gemas + abono;
                        alert("gemas actuales: " + gemas);
                    }
                    break;

                case 3:
                    alert("El valor del banner permanente es de: " + bPerm + " gemas");
                    if (gemas >= bPerm) {
                        gemas = gemas - bPerm;
                        alert("Has jugado al Banner Permanente, te quedan: " + gemas + " gemas");
                    }
                    else {
                        alert("Gemas insuficientes, tienes: " + gemas + " gemas");
                    }
                    break;

                case 4:
                    alert("El valor del banner promocional es de: " + bProm + " gemas");
                    if (gemas >= bProm) {
                        gemas = gemas - bProm;
                        alert("Has jugado al Banner Promocional, te quedan: " + gemas + " gemas");
                    }
                    else {
                        alert("Gemas insuficientes, tienes: " + gemas + " gemas");
                    }
                    break;

                default:
                    alert("La opcion ingresada no es valida, intenta nuevamente");
                    break;

            }
            
        }

        opc = parseInt(prompt("Ingresa el numero de la opcion: \n1) Revisar gemas. \n2) Abonar. \n3) Jugar Banner Permanente \n4) Jugar Banner Promocional. \n5)Salir"));
    } while (opc <= 4)
    alert("Vuleve nuevamente, Adios");

}
else {
    alert("Tu cuenta fue bloqueada, favor revisar tu email para mas informacion")
}

