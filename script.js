var estudiantesJSON = []
var tabla = document.getElementById("tablaDatos");

const apiBase =  "http://127.0.0.1:8000"

function obtenerTodos(){
    const url = new URL(apiBase + "/obtener_todos").toString()
    fetch(url)
    .then(response => response.json())
    .then(data => {
        estudiantesJSON = data
        actualizarTabla()
    })
    .catch(error => console.log(error))
}


function actualizarTabla(){
    estudiantesJSON.forEach(function (persona) {
        var fila = tabla.insertRow();
        var celdaNombre = fila.insertCell(0);
        var celdaIdentificacion= fila.insertCell(1);
        var celdaSexo = fila.insertCell(2);
        var celdaEdad = fila.insertCell(3);
        var celdaPulsaciones = fila.insertCell(4);
    
        celdaNombre.textContent = persona.nombre
        celdaIdentificacion.textContent = persona.identificacion
        celdaSexo.textContent = persona.sexo
        celdaEdad.textContent = persona.edad
        celdaPulsaciones.textContent = (persona.sexo == "Masculino" ? 220 : 226) - persona.edad
      });
}

 

document.addEventListener('load', obtenerTodos())