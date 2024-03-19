let gastosdelshopping = [];
let categoriaContador = {};

let categoriaGastoAgregado;
let MontoGastoAgregado;

do {
    categoriaGastoAgregado = prompt("Ingresá la categoria que queres registrar. Para terminar, escriba \"SALIR\".");
    if (categoriaGastoAgregado.toUpperCase() !== "SALIR") {
        MontoGastoAgregado = parseInt(prompt("Ingresá el gasto que quieras registrar."));

        let gastoAgregado = {
            categoria: categoriaGastoAgregado,
            monto: MontoGastoAgregado
        }
        gastosdelshopping.push(gastoAgregado);

        if (categoriaContador) [categoriaGastoAgregado] 
            categoriaContador[categoriaGastoAgregado]++;
        }
            
              
        }
    
 while(categoriaGastoAgregado.toUpperCase()!=="SALIR");

function calcularTotalGastos(){
    return gastosdelshopping.reduce((acc,gasto) => acc + gasto.monto, 0);
}

console.log ("Gastos del shopping:", gastosdelshopping);
console.log ("Total de gastos en el shopping:",calcularTotalGastos() );
console.log ("Cantidad de veces de cada categoria:", categoriaContador);