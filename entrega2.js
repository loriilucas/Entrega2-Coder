nombreBienvenida = prompt("Bienvenido a la Tienda Online de Productos Nutricionales !!! \n\n¿Cual es su nombre?");

const carritoDeCompras = [];

function cargarCompra(){
    const nuevoProducto = new Producto();
    nuevoProducto.nombre = prompt("Ingrese el nombre del producto: ");
    nuevoProducto.marca = prompt("Ingrese la marca: ");
    nuevoProducto.precio = Number(prompt("Ingrese el precio del producto:"));

    carritoDeCompras.push (nuevoProducto);
}

function cargarMasDeUnProducto () {
    let seguir;
    do {
        cargarCompra();
        seguir = prompt("Desea agregar otro producto: si/no");

    } while(seguir == "si");
}

function mostrarCompra (){
    let lista = "";
    let totalAPagar = 0;

    carritoDeCompras.forEach((producto) => {
        lista += `Producto: ${producto.nombre} \nMarca: ${producto.marca} \nPrecio: ${producto.precio} \n\n`;
    })

    totalAPagar = carritoDeCompras.reduce((total, producto) => {
        return total + producto.precio;
    },0)

    alert(lista + "Total a pagar: $ " + totalAPagar)
    alert("Gracias por comprar en nuestra tienda, lo esperamos pronto " + nombreBienvenida);
}

cargarMasDeUnProducto();
mostrarCompra();