function init() {
  $("#form_demografia").on("submit", function (e) {
    guardaryeditar(e);
  });
}

$().ready(() => {
 
  todos();
});

var todos = () => {
  var todos = new Demografia_Model("", "", "", "", "", "", "","", "todos");
  todos.todos();
}

var guardaryeditar = (e)=>{
    e.preventDefault();
    const Nombre = document.getElementById("Nombre").value;
    const Apellido = document.getElementById("Apellido").value;
    const Edad = document.getElementById("Edad").value;
    const Genero = document.getElementById("Genero").value;
    const Ciudad = document.getElementById("Ciudad").value;
    const Pais = document.getElementById("Pais").value;

    var formData = new FormData(e.target);  
    formData.append('Nombre',Nombre);
    formData.append('Apellido',Apellido);
    formData.append('Edad',Edad);
    formData.append('Genero',Genero);
    formData.append('Ciudad',Ciudad);
    formData.append('Pais',Pais);


    var demografia = new Demografia_Model('','','','','','','',formData,'insertar');
    demografia.insertar();
}


;init();