const oDisco = { Artista: "", Año: "", Genero: "", Album: "", Cantidad: "", Precio: "" };
let vArtista = "";
let vAño = "0";
let vGenero = "";
let vAlbum = "";
let vCantidad = 0;
let vPrecio = 0;

function fcargarArtista() {
    vArtista = prompt("Ingrese el nombre del artista");
    if (vArtista == "" || vArtista.length < 3 || vArtista == null) {
        console.log("El nombre del artista no puede estar vacio ni tener menos de 3 caracteres");
        return;
    } else {
        oDisco.Artista = vArtista;

    }
}

function fcargarAñoAlbum() {
    vAño = prompt("Ingrese el año del disco");
    if (vAño == "" || vAño < 1900 || vAño == null) {
        console.log("El año del disco no puede estar vacio ni ser anterior a 1900");

    } else {
        oDisco.Año = vAño;
    }
}

function fcargarGeneroAlbum() {
    vGenero = prompt("Ingrese el genero del disco");
    if (vGenero == "" || vGenero.length < 3 || vGenero == null) {
        console.log("El genero del disco no puede estar vacio ni tener menos de 3 caracteres");

    } else {
        oDisco.Genero = vGenero;

    }
}

function fcargarNombreAlbum() {
    vAlbum = prompt("Ingrese el album del disco");
    if (vAlbum == "" || vAlbum.length < 3 || vAlbum == null) {
        console.log("El nombre disco no puede estar vacio ni tener menos de 3 caracteres");

    } else {
        oDisco.Album = vAlbum;
    }
}

function fcargarCantDiscos() {
    vCantidad = prompt("Ingrese la cantidad de discos");
    if (vCantidad == "" || vCantidad == null) {
        console.log("La cantidad de discos no puede estar vacio ");

    } else {
        oDisco.Cantidad = vCantidad;
    }
}

function fcargarPrecioDisco() {
    vPrecio = prompt("Ingrese el precio del disco");
    if (vPrecio == "" || vPrecio == null) {
        console.log("El precio del disco no puede estar vacio ");

    } else {
        oDisco.Precio = vPrecio;
    }
}

function crearDisco(oDisco) {
    fcargarArtista();
    fcargarAñoAlbum();
    fcargarGeneroAlbum();
    fcargarNombreAlbum();
    fcargarCantDiscos();
    fcargarPrecioDisco();


}

let aCatalogo = [];

function fapp() {
    let vcontrol = prompt("Desea cargar un disco? (s/n)");
    if (vcontrol == null || vcontrol == "") {
        console.log("No se puede cargar ningun disco, debido a que no se ingreso ningun valor");
        return;

    }
    while (vcontrol == "s") {
        crearDisco(oDisco);
        aCatalogo.push(oDisco);
        console.log("Disco cargado con exito");
        let sOpcion = prompt("Desea agregar otro disco? (s/n)");
        if (sOpcion == "n") {
            break;
        }

    }
    fMostrarCatalogo();
    fStockDiscos();
    fPrecioTotalDiscos();
    fDiscoMasCaro();
    let sOpcion3 = prompt("Desea verificar la existencia de un album? (s/n)");
    if (sOpcion3 == "s") {

        fVerificarExistenciaAlbum();
    }


    let sOpcion = prompt("Desea buscar discos por artista? (s/n)");
    if (sOpcion == "s") {

        fBuscarDiscoArtista();
    }
    let sOpcion2 = prompt("Desea buscar los discos de acuerdo a un precio maximo? (s/n)");
    if (sOpcion2 == "s") {
        fBuscarDiscoPorPrecios();
    }
    console.log("Gracias por utilizar el programa, hasta luego...");
}

function fMostrarCatalogo() {
    let sCadena = "";
    for (let i = 0; i < aCatalogo.length; i++) {
        sCadena += "Artista: " + aCatalogo[i].Artista + "\n";
        sCadena += "Año: " + aCatalogo[i].Año + "\n";
        sCadena += "Genero: " + aCatalogo[i].Genero + "\n";
        sCadena += "Album: " + aCatalogo[i].Album + "\n";
        sCadena += "Cantidad: " + aCatalogo[i].Cantidad + "\n";
        sCadena += "Precio: " + aCatalogo[i].Precio + "\n";
        console.log(sCadena);
    }

}
fapp();

/**/
/*Buscar disco por artista */
function fBuscarDiscoArtista() {
    let sCadena = "";
    let vNombreArtista = prompt("Ingrese el nombre del artista a buscar");
    if (vNombreArtista == "" || vNombreArtista == null) {
        console.log("No se puede buscar ningun disco, debido a que no se ingreso ningun valor");
        return;
    } else {
        let vDiscoArtista = aCatalogo.find(oDisco => oDisco.Artista == vNombreArtista);
        if (vDiscoArtista == undefined) {
            console.log("No se encontro ningun disco con el artista ingresado");
            return;
        } else {
            sCadena += "Artista: " + vDiscoArtista.Artista + "\n";
            sCadena += "Año: " + vDiscoArtista.Año + "\n";
            sCadena += "Genero: " + vDiscoArtista.Genero + "\n";
            sCadena += "Album: " + vDiscoArtista.Album + "\n";
            sCadena += "Cantidad: " + vDiscoArtista.Cantidad + "\n";
            sCadena += "Precio: " + vDiscoArtista.Precio + "\n";
            //muestro los datos del artista si coincide con lo cargado
            console.log(sCadena);
        }
    }

}
//buscar disco por precio maximo, es decir todos los discos con un precio menor al que se ingreso
function fBuscarDiscoPorPrecios() {
    let sCadena = "";
    let vPrecioMaximo = prompt("Ingrese el precio maximo  para buscar discos");
    if (vPrecioMaximo == "" || vPrecioMaximo == null) {
        console.log("No se puede buscar ningun disco, debido a que no se ingreso ningun valor");
        return;
    } else {
        const oDiscoPrecio = aCatalogo.find(oDisco => oDisco.Precio <= vPrecioMaximo);
        if (oDiscoPrecio == undefined) {
            console.log("No se encontraron discos por debajo del precio ingresado");
            return;
        } else {
            sCadena += "Artista: " + oDiscoPrecio.Artista + "\n";
            sCadena += "Año: " + oDiscoPrecio.Año + "\n";
            sCadena += "Genero: " + oDiscoPrecio.Genero + "\n";
            sCadena += "Album: " + oDiscoPrecio.Album + "\n";
            sCadena += "Cantidad: " + oDiscoPrecio.Cantidad + "\n";
            sCadena += "Precio: " + oDiscoPrecio.Precio + "\n";
            //muestro los discos cuyo valor sea menor al ingresado
            console.log(sCadena);
        }


    }

}

function fStockDiscos() {
    let vCantidad = 0;

    aCatalogo.forEach(oDisco => {
        vCantidad += Number(oDisco.Cantidad);
    });

    console.log("La cantidad de discos en el catalogo es: " + Number(vCantidad));
}

function fPrecioTotalDiscos() {
    let vPrecioTotal = 0;
    for (let i = 0; i < aCatalogo.length; i++) {
        vPrecioTotal += Number(aCatalogo[i].Precio);
    }
    console.log("El precio total de los discos es: " + Number(vPrecioTotal));
}

function fDiscoMasCaro() {
    let vPrecioMaximo = 0;
    let vArtistaDiscoMasCaro = "";
    let vAlbumCaro = "";

    for (let i = 0; i < aCatalogo.length; i++) {
        if (vPrecioMaximo < aCatalogo[i].Precio) {
            vPrecioMaximo = aCatalogo[i].Precio;
            vArtistaDiscoMasCaro = aCatalogo[i].Artista;
            vAlbumCaro = aCatalogo[i].Album;
        }
    }
    console.log("El disco mas caro es del artista " + " " + vArtistaDiscoMasCaro + " " + "el album es " + " " + vAlbumCaro + " " + "y su precio es " + vPrecioMaximo);

}

function fVerificarExistenciaAlbum() {
    let vNombreAlbum = prompt("Ingrese el nombre del album para verificar si se encuentra en la base de datos");
    if (vNombreAlbum == "" || vNombreAlbum == null) {
        console.log("No se puede buscar ningun disco, debido a que no se ingreso ningun valor");
        return;
    } else {
        let existe = aCatalogo.some(oDisco => oDisco.Album = vNombreAlbum);
        if (existe == true) {
            console.log("El album " + " " + vNombreAlbum + " " + "existe");
        } else {
            console.log("El album " + " " + vNombreAlbum + " " + "no existe");
        }
    }
}