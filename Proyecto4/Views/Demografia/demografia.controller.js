function init() {
  $("#form_demografia").on("submit", function (e) {
    guardaryeditar(e);
  });
}

$().ready(() => {
 
  todos_controlador();
});

var todos_controlador = () => {
  console.log();

  var todos = new Demografia_Model("","","","","","","","todos")
  todos.todos();
}

var guardaryeditar = (e) => {
  e.preventDefault()
  var formData =  new formData($("#form_demografia")[0]);
   
  var ID = document.getElementById("ID").value
  console.log(ID);
  if(ID > 0){
    var demografia = new Demografia_Model("","","","","","",formData,"editar");
    demografia.editar();
  }else{
    var demografia = new Demografia_Model("","","","","","",formData,"insertar");
    demografia.insertar();  
  }
};
var editar = (ID) => {
  var uno = new Demografia_Model(ID, "", "", "", "", "", "","uno");
  uno.uno();
}
var eliminar=(ID)=>{
  var eliminar = new Demografia_Model(ID, "", "", "", "", "", "","eliminar");
  eliminar.eliminar();
}


init();