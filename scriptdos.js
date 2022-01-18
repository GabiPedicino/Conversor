function dolarAPesos(){
    let dolarIngresado = parseFloat(document.getElementById("dolar").value);
    let dolarHoyDos = 209.00;
    let resultadoDos;
    let impuestoPaisDos;
    let impuestoGananciasDos;
    let valorTotalPesos;
    
  
    resultadoDos = parseFloat(dolarIngresado * dolarHoyDos);
    impuestoPaisDos = dolarIngresado * 0.3;
    impuestoGananciasDos = dolarIngresado * 0.35;
    valorTotalPesos = parseFloat(resultadoDos) + parseFloat(impuestoPaisDos) + parseFloat(impuestoGananciasDos);
  
    console.log("funciona")
    
    alert('U$S' + dolarIngresado.toFixed(2) + ' dolares ingresados son $' + resultadoDos.toFixed(2) + '\n' + 
   'El impuesto país es de: U$S' + impuestoPaisDos.toFixed(2) + '\n' + 'El recargo impositivo es de: U$S' + impuestoGananciasDos.toFixed(2) + '\n' + 'El total a cobrar por U$S' + dolarIngresado.toFixed(2) + ' es de $' + valorTotalPesos.toFixed(2));
  }

function imposeMinMax(el){
    if(el.value != "")
    {
      if(parseInt(el.value) < parseInt(el.min))
      {
        el.value = el.min;
      }
      if(parseInt(el.value) > parseInt(el.max))
      {
        el.value = el.max;
      }
    }
    console.log("entra");
}

function limpiar() {
    document.getElementById("dolar").value = "";
}