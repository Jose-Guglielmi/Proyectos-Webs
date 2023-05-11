//Se cargan los modulos necesarios.
var express = require("express");
var path = require("path");
//Crea una Express app.
var app = express();
app.set("port", process.env.PORT || 3000);
const productos = [
  {
    nombre: "Kit de 1/2",
    precio: 1000,
    descripcion:
      "Estimula el crecimiento, pelo mas sano y con mas volumen hidrata y suavisa",
    src: "IMG/Kit de 1-2.jpeg",
  },
  {
    nombre: "Baño de biotina 1/4",
    precio: 500,
    descripcion: `Estimula, hidrata, devuelve el brillo y fortalece el crecimiento del pelo`,
    src: "IMG/Baño de biotina.jpg",
  },
  {
    nombre: "Baño de biotina 1/2",
    precio: 900,
    descripcion:
      "Estimula, hidrata, devuelve el brillo y fortalece el crecimiento del pelo",
    src: "IMG/Baño de biotina.jpg",
  },
  {
    nombre: "Baño de biotina 1 Kilo",
    precio: 1700,
    descripcion:
      "Estimula, hidrata, devuelve el brillo y fortalece el crecimiento del pelo",
    src: "IMG/Baño de biotina.jpg",
  },
  {
    nombre: "Jalea para rulos",
    precio: 250,
    descripcion: "Modela, da brillo y nutre.<br>Rulos bien formados",
    src: "IMG/Jalea para rulos.jpg",
  },
  {
    nombre: "Shampoo y acondicionador acido",
    precio: 1000,
    descripcion:
      "Kit de 1/2 Evita el frizz<br>Controla el daño causado por el proceso alcalino de los tratamientos quimicos<br>",
    src: "IMG/Shampoo y acondicionador acido.jpg",
  },
  {
    nombre: "Gel para afeitar 1/2",
    precio: 500,
    descripcion:
      "Facil desplazamiento<br>Forma una capa transparente que protege la piel",
    src: "IMG/Gel para afeitar.jpg",
  },
  {
    nombre: "Plex 1 y plex 2 Kit de 1/4.",
    precio: 1500,
    descripcion: `Plex 1 regenera fibra capilar luego del proceso quimico<br>Plex 2 evita que el pelo se quiebre durante la decoloracion<br><br><i class="fa-solid fa-eye btn-info"> Ver Instrucciones</i>`,
    src: "IMG/Plex 1 y plex 2.jpg",
  },
  {
    nombre: "Productos kids Botox 1/4",
    precio: 450,
    descripcion: "",
    src: "IMG/Productos kids botox.jpg",
  },
  {
    nombre: "Productos kids Keratina-Organico 1/4",
    precio: 450,
    descripcion: "",
    src: "IMG/Productos kids Keratina-Organico.jpg",
  },
  {
    nombre: "Protector termico kids",
    precio: 350,
    descripcion: "",
    src: "IMG/Protector termico kids.jpg",
  },
  {
    nombre: "Balsamo hidratante 1/2",
    precio: 600,
    descripcion: "",
    src: "IMG/Balsamo hidratante.jpg",
  },
  {
    nombre: "Crema para rulos",
    precio: 300,
    descripcion: "",
    src: "IMG/Crema para rulos.jpg",
  },
  {
    nombre: "Matizador hidratante violets 1/4",
    precio: 500,
    descripcion: "",
    src: "IMG/Matizador hidratante violets 1-4.jpg",
  },
  {
    nombre: "Matizador hidratante violets 1/2",
    precio: 900,
    descripcion: "",
    src: "IMG/Matizador hidratante violets 1-2.jpg",
  },
  {
    nombre: "Matizador hidratante violets 1 Kilo",
    precio: 1700,
    descripcion: "",
    src: "IMG/Matizador hidratante violets 1.jpg",
  },
  {
    nombre: "Matizador hidratante black 1/4",
    precio: 500,
    descripcion: "",
    src: "IMG/Matizador hidratante black 1-4.jpg",
  },
  {
    nombre: "Matizador hidratante black 1/2",
    precio: 900,
    descripcion: "",
    src: "IMG/Matizador hidratante black 1-2.jpg",
  },
  {
    nombre: "Matizador hidratante black 1 Kilo",
    precio: 1700,
    descripcion: "",
    src: "IMG/Matizador hidratante black 1.jpg",
  },
];
app.get("/isa-hair/productos", function (req, res) {
  res.send(productos);
});
//obtiene la ruta del directorio publico donde se encuentran los elementos estaticos (css, js).
var publicPath = path.resolve(__dirname, "public"); //path.join(__dirname, 'public'); también puede ser una opción
//Para que los archivos estaticos queden disponibles.
app.use(express.static(publicPath));
app.get("/", function (req, res) {
  res.sendfile(__dirname + "/public/index.html");
});
app.listen(app.get("port"), () => {
  console.log("server on en el puerto " + app.get("port"));
});
