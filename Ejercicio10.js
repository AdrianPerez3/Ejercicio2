console.log(`Calcula lo que se recaudo en un dia en la cadena de tiendas de autoservicio SLOW CAR`);

const rl = require("readline-sync")

let sucursales = rl.questionInt("Cuantas sucursales tiene en diferentes ciudades? ")


let sucurs = 0
let tiend = 0
let venta_Empleado = 0

while (sucurs <= sucursales) {
    let tiendas = rl.questionInt("Cuantas tiendas tienes en cada ciudad")
    while (tiend <= tiendas) {
        let empleados = rl.questionInt("Cuantos empleados tiene cada tienda? ")
        while (venta_Empleado < empleados) {
            let venta = rl.questionInt("Cuantoha vendido cada empleado? ")
        }
    }
}