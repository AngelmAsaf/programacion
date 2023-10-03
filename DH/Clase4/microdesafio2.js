let pagoMes = 5000
let consumoKWH = 301
let total = (consumoKWH>300) ? pagoMes + pagoMes*0.2: pagoMes
 console.log ("Debido a que su hogar tuvo un consumo de " + consumoKWH + ", en base al ajuste tarifario (hogares con consumo mayor a 300kwh por mes tendrán un aumento del 20%), cumplimos con informarle que se ha ajustado el total a pagar, que será de $" + total)

 // otra forma
 /*let pagoMes= 5000

let consumoKWH = 600
let total = pagoMes + pagoMes*0.2

consumoKWH > 300 ?  console.log("Debido a que su hogar tuvo un consumo de " + consumoKWH + ", en base al ajuste tarifario (hogares con consumo mayor a 300kwh por mes tendrán un aumento del 20%), cumplimos con informarle que se ha ajustado el total a pagar, que será de $" + total) : console.log("mantiene el subsidio")*/