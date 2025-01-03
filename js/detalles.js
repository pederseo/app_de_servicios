// Cargar la barra de navegación
fetch('../components/nav.html')
.then(response => response.text())
.then(data => {
  document.getElementById('nav-placeholder').innerHTML = data;
});

// Cargar el pie de página
fetch('../components/footer.html')
.then(response => response.text())
.then(data => {
  document.getElementById('footer-placeholder').innerHTML = data;
});

// Mostrar los detalles del proveedor
document.addEventListener("DOMContentLoaded", () => {
  // Obtener el ID desde la URL
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  fetch("../proveedores.json")
    .then((response) => response.json())
    .then((data) => {
      const proveedor = data.find((item) => item.id == id);

      if (proveedor) {
        document.getElementById("detalle").innerHTML = `
          <div class="detalle-card">
          <div class="detalle-card-content">
            <img src="${proveedor.imagen}" alt="${proveedor.nombre}" />
            <div class="detalle-text">
            <h2>${proveedor.nombre}</h2>
            <p>${proveedor.descripcion}</p>
            <p><strong>Calificación:</strong> ${proveedor.calificacion} ⭐ (${proveedor.reseñas} reseñas)</p>
            <p><strong>Categoría:</strong> ${proveedor.categoria}</p>
            <p><strong>Disponibilidad:</strong> ${proveedor.disponibilidad}</p>
            <p><strong>Email:</strong> <a href="mailto:${proveedor.email}">${proveedor.email}</a></p>
            <p><strong>Teléfono:</strong> <a href="tel:${proveedor.telefono}">${proveedor.telefono}</a></p>
            <p><strong>Dirección:</strong> ${proveedor.direccion}</p>
            <p><strong>Página web:</strong> <a href="${proveedor.pagina_web}" target="_blank">Visitar sitio web</a></p>
            <!-- Botones alineados -->
            <div class="detalle-botones">
              <a href="../views/proveedores.html" class="detalle-button">Volver</a>
              <a href="index.html" class="detalle-button">Contactar</a>
              </div>
              </div>
            </div>
          </div>
        `;
      } else {
        document.getElementById("detalle").innerHTML = "<p>Proveedor no encontrado.</p>";
      }
    })
    .catch((error) => console.error("Error cargando detalle:", error));
});