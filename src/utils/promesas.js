let isOk = true;

const product = {
    id: 1,
    nombre: 'Play Station 5',
    precio: '$1000',
    imagen: 'https://f.fcdn.app/imgs/0a59b6/tienda.soysantander.com.uy/comp/1aef/original/catalogo/ps5ps51/2000-2000/consola-play-station-5-ps5-digital-consola-play-station-5-ps5-digital.jpg',
    descripcion: "Lo que tienes que saber de este producto: Incluye control. Resolución de 3840px x 2160px. Memoria RAM de 16GB. Horas de diversión garantizada. Cuenta con: 1 soporte vertical, 1 cable de alimentación ac, 1 cable usb, 1 cable hdmi, 1 guía de inicio rápido, 1 guía de seguridad."
}

const promesas = (time, task) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(isOk) {
                resolve(task);
            } else {
                reject('Error');
            }}, time)})}


export const traerProducto = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(product);}, 3000)
    })
}

export default promesas;
