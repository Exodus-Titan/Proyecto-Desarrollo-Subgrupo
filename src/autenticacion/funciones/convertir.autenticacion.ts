import { busqueda } from "../objetos para las requests";

export function convertirABuscar(nombre_usuario : string) : busqueda{
    let x : busqueda= new busqueda(nombre_usuario)
    return x
}