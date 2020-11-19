console.log("Pasta Gansa ha augmentado el limite de credio de las tajetas de credito");

const rl = require("readline-sync")

let tipo_Cliente = rl.questionInt("Me puedes decir el tipo de cliente eres para determinar el nuevo limite de credito? ")
let dinero = rl.questionInt('Cuanto dinero necesitas que te prestemos? ');

if (tipo_Cliente == 1) {
    console.log(`Eres el cliente tipo ${tipo_Cliente} entonces el aumento sera de 25%
                Nos has pedido ${dinero} euros, ahora te podemos aumentar esta cantidad a ${dinero + (dinero * 0.25)}`);
} else if (tipo_Cliente == 2) {
    console.log(`Eres el cliente tipo ${tipo_Cliente} entonces el aumento sera de 35%
                Nos has pedido ${dinero} euros, ahora te podemos aumentar esta cantidad a ${dinero + (dinero * 0.35)}`);
} else if (tipo_Cliente == 3) {
    console.log(`Eres el cliente tipo ${tipo_Cliente} entonces el aumento sera de 40%
                    Nos has pedido ${dinero} euros, ahora te podemos aumentar esta cantidad a ${dinero + (dinero * 0.40)}`);
} else {
    console.log(`Eres el cliente tipo ${tipo_Cliente} entonces el aumento sera de 50%
                Nos has pedido ${dinero} euros, ahora te podemos aumentar esta cantidad a ${dinero + (dinero * 0.50)}`);
}