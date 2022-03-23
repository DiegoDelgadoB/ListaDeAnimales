class Propietario {
    constructor(nombre, direccion, telefono) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
    }

    datosPropietario() {
        return `El nombre del dueño es: <strong>${this.nombre}</strong>. El domicilio es: <strong>${this.direccion}</strong>, y el número de telefóno de contacto es: <strong>${this.telefono}</strong>`
    }
}
