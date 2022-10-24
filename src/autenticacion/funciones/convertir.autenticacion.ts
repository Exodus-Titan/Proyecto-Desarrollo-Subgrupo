import { busqueda, Login } from "../objetos para las requests";

export function convertirABuscar(nombre_usuario : string) : busqueda{
    const x : busqueda= new busqueda(nombre_usuario)
    return x
}
