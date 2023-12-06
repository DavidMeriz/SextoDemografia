//archivo de donde llamar al procedimiento
//controlador

function init() {
  $("#form_demografia").on("submit", function (e) {
    guardaryeditar(e);
  });
}

$().ready(() => {
  //detecta carga de la pagina
  todos_controlador();
});

var todos_controlador = () => {
  var todos = new Demografia_Model("", "", "", "", "", "", "", "todos");
  todos.todos();
}

var guardaryeditar = (e)=>{
    e.preventDefault();
    var formData = new FormData($("#form_demografia")[0]);
    var demografia = new Demografia_Model('','','','','','',formData,'insertar');
    demografia.insertar();
}


init();
