
// Funciones

function carrito(opcion){
    
    while (opcion !== 0){
        switch(opcion){
            case 1:
                agregarAlCarrito();
                break;

            case 2:
                valorTotalCarrito();
                break;

            case 3:
                quitarDeCarrito();
                break;

            case 4:
                terminarCompra();
                break;

            default:
                alert("Ingresó un número incorrecto");
                break;
        }

        opcion = pedirOpcion();

     } 

     alert("Gracias por utilizar nuestros servicios.");

}


function agregarAlCarrito(){

    let codigoProducto = pedirProducto();

    while(codigoProducto !== 0){

// Controlamos la operacion que elije el usuario

        switch(codigoProducto){
            case 1:
                detalleProducto(codigoProducto);
                total += 1000;
                break;

            case 2:
                detalleProducto(codigoProducto);
                total += 2000;
                break;

            case 3:
                detalleProducto(codigoProducto);
                total += 3000;
                break;

            case 4:
                detalleProducto(codigoProducto);
                total += 4000;
                break;

            case 5:
                opcion = pedirOpcion();
                break;

            default:
                alert("Usted ingresó un valor incorrecto");
        }
        codigoProducto = pedirProducto();
}
    
}


function eliminarImporteDelCarrito(importe) {

    if(importe > total){
        alert("El importe ingresado es mayor al total, por favor ingrese un monto menor.")
    }else{
        total = total - importe;
        return total;
    }
}


function valorTotalCarrito() {
// enviamos el valor total de la compra
    alert("Los productos ingresados son: " + codigoDeProducto + ", el total de su carrito es de $ " + total );

}


function detalleProducto(codigoProducto){
//con esta condicion concatenamos el detalle del producto
   if(codigoDeProducto !== "") {
       codigoDeProducto += ", ";
   }
   codigoDeProducto += codigoProducto
}


function terminarCompra(){
    if(total > 0){
        alert("El saldo a pagar es de : $ " + total);
        alert("Muchas gracias por su compra!");
    }else{
        alert("Usted no posee elementos en el carrito.");
        alert(pedirOpcion());
    }
}


function pedirProducto(){

    return parseInt(prompt("Ingrese el detalle del producto que desee: \n 1. Producto 1 $1000. \n 2. Producto 2 $2000. \n 3. Producto 3 $3000. \n 4. Producto 4 $4000. \n 0. Ingrese 0 para volver al menu anterior. "));

    }


function pedirOpcion(){

    return parseInt(prompt("Ingrese la opción que desea: \n 1. Agregar al carrito. \n 2. Detalle total de la compra. \n 3 Eliminar del carrito. \n 4 Finalizar compra. \n 0. Salir  "));

}


// Variables

let codigoDeProducto = "";
let total = 0;


// Inicio del Programa

let opcion = pedirOpcion();
carrito(opcion);

