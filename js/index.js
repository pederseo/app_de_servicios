    // Cargar barra de navegación desde un archivo externo
    fetch('../components/nav.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('nav-placeholder').innerHTML = data;
      });

    // Cargar pie de página desde un archivo externo
    fetch('../components/footer.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('footer-placeholder').innerHTML = data;
      });