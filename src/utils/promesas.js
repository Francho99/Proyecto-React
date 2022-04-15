import products from "./products"


const promesas = (time, task, categoria) => {
    return new Promise((resolve, reject) => {
        const productosFiltrados = products.filter((producto)=> producto.category === categoria)
        setTimeout(() => {
            if(categoria){
                resolve(productosFiltrados)
            }
            else {
                resolve(task);
            }}, time)})}


//export const traerProducto = (id) => {
//    return new Promise((resolve, reject) => {
//        const productoElegido = products.find((producto) => producto.id === Number(id))
//        setTimeout(() => {
//            resolve(productoElegido);})
//            reject('Error')
//    }, 2000)
//}

export function traerProducto(id) {
    return new Promise((resolve, reject) => {
        const productoElegido = products.find((product) => product.id === parseInt(id))
        setTimeout(() => {
            resolve(productoElegido)
            reject(console.log('Error traerProducto'))
        }, 2000)
    })
}

export default promesas;
