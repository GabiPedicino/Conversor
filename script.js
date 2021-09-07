function conversor(){
    let pesosIngresados = document.getElementById("pesos").value;
    let dolarHoy = 102.5;
    let impuestoPais;
    let impuestoGanancias;
    let valorTotal;
   

    resultado = pesosIngresados / dolarHoy;
    impuestoPais = pesosIngresados * 0.3;
    impuestoGanancias = pesosIngresados * 0.35;
    valorTotal = parseFloat (pesosIngresados) + parseFloat (impuestoPais) + parseFloat (impuestoGanancias); //valor que abona con la suma de los impuestos.

    if(resultado <= 0)
    {
        alert('Error. Ingrese un monto mayor a cero: ');

    } else if (resultado>6000){
        
        alert('No se puede convertir un monto superior a 6000 dólares');

    }
    else
    {
       alert('$ ' + Math.round (pesosIngresados) + ' pesos argentinos son U$S  ' + Math.round (resultado) + '\n' + 
       'El impuesto país es de: $' + Math.round(impuestoPais) + '\n' + 'Las retenciones son de $  ' + Math.round (impuestoGanancias) + '\n' + 'El total a pagar por U$S:  ' + Math.round (resultado) + ' es de $ ' + Math.round (valorTotal));
    }

}
