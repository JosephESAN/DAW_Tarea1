// Obtiene el tbody de la tabla
const equiposTable = document.getElementById('equipos-table');

// Función para agregar una fila a la tabla
function agregarFila(posicion, escudo, equipo, anioFundacion) {
  const fila = document.createElement('tr');

  const celdaPosicion = document.createElement('td');
  celdaPosicion.textContent = posicion;
  fila.appendChild(celdaPosicion);

  const celdaEscudo = document.createElement('td');
  const imgEscudo = document.createElement('img');
  imgEscudo.src = escudo;
  imgEscudo.alt = `${equipo} escudo`;
  celdaEscudo.appendChild(imgEscudo);
  fila.appendChild(celdaEscudo);

  const celdaEquipo = document.createElement('td');
  celdaEquipo.textContent = equipo;
  fila.appendChild(celdaEquipo);

  const celdaAnioFundacion = document.createElement('td');
  celdaAnioFundacion.textContent = anioFundacion;
  fila.appendChild(celdaAnioFundacion);

  equiposTable.appendChild(fila);
}

// Función para cargar los datos de los equipos
function cargarDatos() {
  // Realiza una petición GET al archivo JSON
  fetch('../js/equipos.json')
    .then(response => response.json())
    .then(data => {
      // Ordena los equipos por posición
      data.sort((a, b) => a.posicion - b.posicion);

      // Agrega una fila por cada equipo
      data.forEach(equipo => {
        agregarFila(equipo.posicion, equipo.escudo, equipo.nombre, equipo.anioFundacion);
      });
    })
    .catch(error => console.error(error));
}

// Carga los datos al cargar la página
cargarDatos();

