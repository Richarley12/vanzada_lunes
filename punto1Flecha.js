let calcularDistancia = (x1,x2,y1,y2)=>Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2))
let bolsita= calcularDistancia(1,1,2,3)
console.log(`la distancia es de ${bolsita} UA`)