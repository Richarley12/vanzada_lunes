function calcularDistancia(x1,x2,y1,y2) {
    /*let restax=x2-x1
    let restay=y2-y1
    let potenciax=Math.pow(restax,2)
    let potenciay=Math.pow(restay,2)
    let sumatorio=potenciax+potenciay
    let raizcuadrada=Math.sqrt(sumatorio)

    return raizcuadrada*/
    return Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2))
}
let bolsita= calcularDistancia(1,1,2,3)

console.log(`la distancia es de ${bolsita} UA`)
//console.log("la distancia es de "+ bolsita+ "UA")