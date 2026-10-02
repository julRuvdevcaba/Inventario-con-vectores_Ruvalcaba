  class Inventario {
    constructor() {
        this.array = [];
    }

    agregar(producto) {
        this.array.push(producto);
    }

    buscar(codigo) {
        for (let i = 0; i < this.array.length; i++) {
            if (this.array[i].codigo === codigo) {
                return this.array[i];
            }
        }
        return null;
    }

    eliminar(codigo) {
        for (let i = 0; i < this.array.length; i++) {
            if (this.array[i].codigo === codigo) {
                let eliminado = this.array[i];

                for (let j = i; j < this.array.length - 1; j++) {
                    this.array[j] = this.array[j + 1];
                }

                this.array.pop();
                return eliminado;
            }
        }
        return null;
    }

    insertar(producto, posicion) {
        if (posicion < 0) {
            posicion = 0;
        }

        if (posicion >= this.array.length) {
            this.array.push(producto);
            return;
        }

        for (let i = this.array.length; i > posicion; i--) {
            this.array[i] = this.array[i - 1];
        }

        this.array[posicion] = producto;
    }

    listar() {
        let texto = "";

        for (let i = 0; i < this.array.length; i++) {
            if (i > 0) {
                texto += "\n";
            }
            texto += this.array[i].info();
        }

        return texto;
    }

    extraerPrimero() {
        if (this.array.length === 0) {
            return null;
        }

        let primero = this.array[0];

        for (let i = 0; i < this.array.length - 1; i++) {
            this.array[i] = this.array[i + 1];
        }

        this.array.pop();
        return primero;
    }

    agregarInicio(producto) {
        if (this.array.length === 0) {
            this.array.push(producto);
            return;
        }

        for (let i = this.array.length; i > 0; i--) {
            this.array[i] = this.array[i - 1];
        }

        this.array[0] = producto;
    }
}

class Producto {
    constructor(codigo, nombre, cantidad, costo) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.costo = costo;
    }

    info() {
        return "Codigo: " + this.codigo + ", Nombre: " + this.nombre + ", Cantidad: " + this.cantidad + ", Costo: " + this.costo;
    }
}

let inventario = new Inventario();
let nuevo = new Producto(1, "Lapiz", 100, 10);
inventario.agregar(nuevo);
nuevo = new Producto(2, "Borrador", 200, 20);
inventario.agregar(nuevo);
nuevo = new Producto(3, "Cuaderno", 300, 30);
inventario.agregar(nuevo);
nuevo = new Producto(4, "Clips", 20, 10);
inventario.agregarInicio(nuevo);
nuevo = new Producto(5, "Sacapuntas", 500, 50);
inventario.agregar(nuevo);
console.log(inventario.listar());

inventario.eliminar(3);
console.log(inventario.listar());

let res = inventario.buscar(10);
if (res == null) {
    console.log("No existe");
} else {
    console.log("si existe");
}

res = inventario.buscar(4);
if (res == null) {
    console.log("No existe");
} else {
    console.log(res.info());
}

res = inventario.extraerPrimero();
console.log("el primero es");
console.log(res.info());
