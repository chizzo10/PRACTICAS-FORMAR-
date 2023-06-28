const express = require('express');
const app = express();
const path = require('path');
const PORT = 3030;

// Configuración de archivos estáticos
app.use(express.static('public'));

// Rutas
const viewsPath = path.join(__dirname, 'views');

// Ruta principal
app.get('/', (req, res) => {
  res.sendFile(path.join(viewsPath, 'home.html'));
});

// Rutas adicionales
const routes = ['about', 'contact', 'music'];

routes.forEach(route => {
  app.get(`/${route}`, (req, res) => {
    res.sendFile(path.join(viewsPath, `${route}.html`));
  });
});

// Ruta 404
app.get('/*', (req, res) => {
  res.sendFile(path.join(viewsPath, '404.html'));
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});


