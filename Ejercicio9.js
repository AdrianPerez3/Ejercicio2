console.log(`Vamos a determinar cuanto ha de pagar una empresa en sueldos`);

const rl = require("readline-sync")

let trabajadores = rl.questionInt("Me puedes decir cunatos trabajadores tiene tu empresa? ")

let horas = rl.questionInt("Cuantas horas trabaja un trabajador a la semana? ")
 
let precio_Hora = rl.questionInt("Cuanto paga la empresa la hora trabajada? ")

let sueldo_semanal = horas * precio_Hora

console.log(`El sueldo semanal de cada trabajador es de ${sueldo_semanal}

            La empresa dispone de ${trabajadores} trabajador(es) entonces la empresa pagara
            en total en sueldos ${sueldo_semanal * trabajadores} euros.`);