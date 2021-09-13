function conversor(){
    let pesosIngresados = document.getElementById("pesos").value;
    let dolarHoy = 97.25;
    let impuestoPais;
    let impuestoGanancias;
    let valorTotal;
   

    resultado = pesosIngresados / dolarHoy;
    impuestoPais = pesosIngresados * 0.3;
    impuestoGanancias = pesosIngresados * 0.35;
    valorTotal = parseFloat (pesosIngresados) + parseFloat (impuestoPais) + parseFloat (impuestoGanancias); //valor que abona con la suma de los impuestos.

    let input = document.getElementById('pesos').addEventListener("input", function () {
        let num = +this.value, max = 10, min = 1;
        if (num > max || num < min) {
            return false;
          }
    })



    if(resultado>6000)
    {
        
        alert('No se puede convertir un monto superior a 6000 dólares');

    }
    else
    {
       alert('$' + pesosIngresados + ' pesos argentinos son U$S' + resultado.toFixed(3) + '\n' + 
       'El impuesto país es de: $' + impuestoPais.toFixed(2) + '\n' + 'El recargo impositivo es de: $' + impuestoGanancias.toFixed(2) + '\n' + 'El total a pagar por U$S' + resultado.toFixed(2) + ' es de $' + valorTotal.toFixed(2));
    }

}
