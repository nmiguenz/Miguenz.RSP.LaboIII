//Clases
export class Anuncio {
    constructor(object) {
        this.id = object.id ? object.id : null;
        this.titulo = object.titulo;
        this.transaccion = object.transaccion;
        this.descripcion = object.descripcion;
        this.precio = object.precio;
    }
}
export class Anuncio_Auto extends Anuncio {
    constructor(object) {
        super(object);
        this.num_puertas = object.num_puertas;
        this.num_kms = object.num_kms;
        this.potencia = object.potencia;
    }
    ;
}
export class DataAccess {
    //traerLocalStorage
    traer(clickEnAnuncios, anuncios, taerLocal, agregarRowTableTh, agregarRowTableTd, arrayData) {
        let auxAnuncios = JSON.parse(localStorage.getItem('anuncios'));
        clickEnAnuncios = JSON.parse(localStorage.getItem('clickAnuncios'));
        if (auxAnuncios) {
            anuncios = auxAnuncios.map(item => new Anuncio_Auto(item));
            taerLocal();
            agregarRowTableTh(arrayData);
            agregarRowTableTd(anuncios);
        }
        else {
            console.log('No hay Lista anuncios en LocalStorage');
        }
        return anuncios
    }
    ;
    //altaLocalStorage
    insertar(item, anuncios) {
        if (anuncios) {
            anuncios.push(item);
        }
        else {
            anuncios = [item];
        }
        localStorage.setItem('anuncios', JSON.stringify(anuncios));
        location.reload();
    }
    ;
    //bajaLocalStorage
    borrar(id, anuncios) {
        let auxAnuncio = anuncios.filter(item => item.id !== (id).toString());
        localStorage.setItem('anuncios', JSON.stringify(auxAnuncio));
        //table.deleteRow(indiceRow)
        location.reload();
    }
    ;
    //modificLocalStorage
    modificar(item, anuncios, indiceRow) {
        anuncios[indiceRow - 1] = item;
        localStorage.setItem('anuncios', JSON.stringify(anuncios));
        location.reload();
    }
    ;
}
export var Etransaccion;
(function (Etransaccion) {
    Etransaccion["Alquiler"] = "Alquiler";
    Etransaccion["Venta"] = "Venta";
    Etransaccion["Permuta"] = "Permuta";
})(Etransaccion || (Etransaccion = {}));
