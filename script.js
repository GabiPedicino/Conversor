
const pesosADolar = () => {
  let pesosIngresados = parseFloat(document.getElementById("pesos").value);
  console.log("Pesos ingresados:", pesosIngresados);
  if (isNaN(pesosIngresados)) {
    alert("El valor ingresado no es un número válido.");
    return;
  }
  fetch("https://dolarapi.com/v1/dolares/blue")
    .then(response => {
      console.log("Respuesta de la API:", response);
      if (!response.ok) {
        throw new Error('La respuesta de la API no fue exitosa.');
      }
      return response.json();
    })
    .then(data => {
      console.log("Datos de la API:", data);
      let dolarHoy = parseFloat(data.compra);
      console.log('Compra: ', data.compra);
      let dolarHoyVenta = parseFloat(data.venta);
      console.log('Venta: ', data.venta);
      if (isNaN(dolarHoy)) {
        throw new Error('El valor del dólar obtenido de la API no es un número válido.');
      }
      let cotizacion = (dolarHoy + dolarHoyVenta) / 2; 
      let valorTotal = pesosIngresados / cotizacion; 
      const contenidoHTML = ` 
        <p>Cotización dólar: U$S ${cotizacion.toFixed(2)}</p>
        <p>Pesos ingresados: $ ${pesosIngresados}</p>
        <p>Recibirá: U$S ${valorTotal.toFixed(2)}</p>
      `;
      document.getElementById('modal-peso-dolar').innerHTML = contenidoHTML; 
    })  
    .catch(error => console.error('Error al obtener el valor del dólar', error));
}


const dolarAPesos = () => {
  let dolaresIngresados = parseFloat(document.getElementById("dolar").value);
  console.log("Dólares ingresados:", dolaresIngresados);
  if (isNaN(dolaresIngresados)) {
    alert("El valor ingresado no es un número válido.");
    return;
  }

  fetch("https://dolarapi.com/v1/dolares/blue")
    .then(response => {
      console.log("Respuesta de la API:", response);
      if (!response.ok) {
        throw new Error('La respuesta de la API no fue exitosa.');
      }
      return response.json();
    })
    
    .then(data => {
      console.log("Datos de la API:", data);
      let dolarHoy = parseFloat(data.compra);
      console.log('Compra: ', data.compra);
      let dolarHoyVenta = parseFloat(data.venta);
      console.log('Venta: ', data.venta);
      if (isNaN(dolarHoy)) {
        throw new Error('El valor del dólar obtenido de la API no es un número válido.');
      }
      let cotDolar = (dolarHoy + dolarHoyVenta) / 2;
      let resultado = (dolaresIngresados * cotDolar);
      const contenido_HTML = ` 
      <p>Cotización dólar: U$S ${cotDolar.toFixed(2)}</p>
      <p>Dólares ingresados: U$S ${dolaresIngresados}</p>
      <p>Recibirá: $ ${resultado.toFixed(2)}</p>
    `;
      document.getElementById('modal-dolar-peso').innerHTML = contenido_HTML;       
    }) 
    .catch(error => console.error('Error al obtener el valor del dólar:', error));
}

const limpiarMonto = () => {
  document.getElementById("pesos").value = "";
}

const limpiar = () =>{
  document.getElementById("dolar").value = "";
}