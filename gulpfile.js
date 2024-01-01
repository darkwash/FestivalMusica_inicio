const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const plumber = require("gulp-plumber");

function css(done) {
  src("src/scss/**/*.scss") //identificar archivo .SCSS a compilar
    .pipe(plumber())
    .pipe(sass()) //compilarlo
    .pipe(dest("build/css")); //almacenarlo en HD

  done(); //callback que avisa cuando se termina de ejecutar todas las funciones en cadena
}

function dev(done) {
  watch("src/scss/**/*.scss", css);
  done();
}

// exports.nombre_quemanda_llamar = nombre_funcion;
exports.dev = dev;

//forma de mandar llamar la tarea en ls terminal de vscode
// escribimos npx gulp nombre_quemanda_llamar

//npx es un comando que ejecuta las tareas de gulp sin necesidad de instalarlas globalmente

//gulp es el nombre del binario que esta dentro de node_modules/bin

//la otra forma es mediante npm y debemos tener el nombre del script en package.json

//escribimos npm run nombre_tarea
