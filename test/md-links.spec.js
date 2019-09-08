const mdLinks = require('../md-links.js');

//estatus de un directorio
test("mdLinks, deberia entregar un objeto con total: 7 y unique: 6 para la ruta test/mdTest con stats true",  () =>{
   expect(mdLinks.mdLinks("test/mdTest",{stats:true})).resolves.toEqual({"total":7,"unique":6})
});

//estatus de un archivo
test("mdLinks, deberia entregar un objeto con total: 3 y unique: 2 para el archivo fileTest2 con stats true",  () =>{
  expect(mdLinks.mdLinks("test/mdTest/fileTest2.md",{stats:true})).resolves.toEqual({"total":3,"unique":2})
});




