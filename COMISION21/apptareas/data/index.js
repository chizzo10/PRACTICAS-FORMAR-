const fs = require('fs');
const { join } = require('path');

const leerJSON = () => {
  const dataJSON = fs.readFileSync(join(__dirname, 'dataTareas.json'), 'utf-8');
  return JSON.parse(dataJSON);
};

const escribirJSON = (tareas) => {
  let dataStringify = JSON.stringify(tareas, null, 2);
  fs.writeFileSync(join(__dirname, 'dataTareas.json'), dataStringify, 'utf-8');
};

module.exports = {
  leerJSON,
  escribirJSON,
};


