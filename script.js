function conversor(){
    let pesosIngresados = document.getElementById("pesos").value;
    let dolarHoy = 209.00;
    let impuestoPais;
    let impuestoGanancias;
    let valorTotal;
   

    resultado = pesosIngresados / dolarHoy;
    impuestoPais = pesosIngresados * 0.3;
    impuestoGanancias = pesosIngresados * 0.35;
    valorTotal = parseFloat (pesosIngresados) + parseFloat (impuestoPais) + parseFloat (impuestoGanancias); //valor que abona con la suma de los impuestos.

       alert('$' + pesosIngresados + ' pesos argentinos son U$S' + resultado.toFixed(2) + '\n' + 
       'El impuesto país es de: $' + impuestoPais.toFixed(2) + '\n' + 'El recargo impositivo es de: $' + impuestoGanancias.toFixed(2) + '\n' + 'El total a pagar por U$S' + resultado.toFixed(2) + ' es de $' + valorTotal.toFixed(2));
    

}

function imposeMinMax(el){
    if(el.value != ""){
      if(parseInt(el.value) < parseInt(el.min)){
        el.value = el.min;
      }
      if(parseInt(el.value) > parseInt(el.max)){
        el.value = el.max;
      }
    }
}

function limpiarMonto() {
  document.getElementById("pesos").value = "";
}


