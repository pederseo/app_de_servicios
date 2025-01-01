fetch('../components/nav.html')
.then(response => response.text())
.then(data => {
  document.getElementById('nav-placeholder').innerHTML = data;
});

fetch('../components/header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header-placeholder').innerHTML = data;
  });

fetch('../components/footer.html')
.then(response => response.text())
.then(data => {
  document.getElementById('footer-placeholder').innerHTML = data;
});

// Función para cargar los proveedores desde el archivo JSON
fetch('../proveedores.json')
  .then(response => response.json())
  .then(proveedores => {
    const proveedoresLista = document.getElementById('proveedores-lista');
    
    proveedores.forEach(proveedor => {
      const tarjetaProveedor = document.createElement('div');
      tarjetaProveedor.classList.add('proveedor-card');
      
      tarjetaProveedor.innerHTML = `
        <img src="${proveedor.imagen}" alt="${proveedor.nombre}" />
        <h3>${proveedor.nombre}</h3>
        <p>${proveedor.descripcion}</p>
        <span>★ ${proveedor.calificacion} (${proveedor.reseñas} reseñas)</span>
        <button onclick="verDetalle(${proveedor.id})">Ver más</button>
      `;
      
      proveedoresLista.appendChild(tarjetaProveedor);
    });
  })
  .catch(error => console.error('Error al cargar los proveedores:', error));
  
  function verDetalle(id) {
    window.location.href = `detalle.html?id=${id}`;}