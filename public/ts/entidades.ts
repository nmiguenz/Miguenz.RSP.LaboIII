//Clases
export class Anuncio {
    public id: number | null;
    public titulo: string;
    public transaccion: string;
    public descripcion: string;
    public precio: string;

    constructor(object: Anuncio) {
        this.id = object.id ? object.id : null;
        this.titulo = object.titulo;
        this.transaccion = object.transaccion;
        this.descripcion = object.descripcion;
        this.precio = object.precio;
    }
}

export class Anuncio_Auto extends Anuncio {
    public num_puertas: string;
    public num_kms: string;
    public potencia: string;

    constructor(object: Anuncio_Auto) {
        super(object);
        this.num_puertas = object.num_puertas;
        this.num_kms = object.num_kms;
        this.potencia = object.potencia;
    };
}

export class DataAccess {

    //traerLocalStorage
    public traer(clickEnAnuncios: object, anuncios: Anuncio_Auto, taerLocal: any, agregarRowTableTh: any, agregarRowTableTd: any, arrayData: Object) {
        let auxAnuncios: [] = JSON.parse(localStorage.getItem('anuncios'));
        clickEnAnuncios = JSON.parse(localStorage.getItem('clickAnuncios'));

        if (auxAnuncios) {
            anuncios = auxAnuncios.map(item => new Anuncio_Auto(item));
            taerLocal();
            agregarRowTableTh(arrayData);
            agregarRowTableTd(anuncios);
        } else {
            console.log('No hay Lista anuncios en LocalStorage');
        }
        return anuncios
    };

    //altaLocalStorage
    public insertar(item: Object, anuncios: []) {
        if (anuncios) {
            anuncios.push(item)
        } else {
            anuncios = [item]
        }
        localStorage.setItem('anuncios', JSON.stringify(anuncios));
        location.reload()
    };

    //bajaLocalStorage
    public borrar(id, anuncios: Anuncio_Auto) {
        let auxAnuncio: Anuncio_Auto = anuncios.filter(item => item.id !== (id).toString());
        localStorage.setItem('anuncios', JSON.stringify(auxAnuncio));
        //table.deleteRow(indiceRow)
        location.reload()
    };

    //modificLocalStorage
    public modificar(item: Object, anuncios: Anuncio_Auto, indiceRow: Number) {
        anuncios[indiceRow - 1] = item
        localStorage.setItem('anuncios', JSON.stringify(anuncios));
        location.reload()
    };
}

export enum Etransaccion {
    Alquiler = "Alquiler",
    Venta = "Venta",
    Permuta = "Permuta",
}