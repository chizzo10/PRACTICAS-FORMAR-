const express = require('express');
const path = require('path');
const app = express();
const PORT =3030

//app.get('/', (req, res) => res.send('bienvenidos a mi sitio web'))

app.get('/',(req,res) => res.sendFile(path.join(__dirname,'views','home.html')))
app.get('/contact',(req,res) => res.sendFile(path.join(__dirname,'views','contact.html')))
app.get('/about',(req,res) => res.sendFile(path.join(__dirname,'views','about.html')))

app.listen(PORT, () => console.log(`server running in http://localhost:${PORT}`))