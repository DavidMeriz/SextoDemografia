
class Demografia_Model {
  constructor(
    ID,
    Nombre,
    Apellido,
    Edad,
    Genero,
    Ciudad,
    Pais,
    Ruta,
  ) {
    this.ID = ID;
    this.Nombre = Nombre; 
    this.Apellido = Apellido;
    this.Edad = Edad;
    this.Genero = Genero;
    this.Ciudad = Ciudad;
    this.Pais = Pais;
    this.Ruta = Ruta;
 }
  todos() {
    var html = "";
    $.get("../../Controllers/demografia.controller.php?op=todos",(res) => {
      res = JSON.parse(res);
      $.each(res, (index, valor) => {       
        html += `<tr>
                <td>${index + 1}</td>
                <td>${valor.Nombre}</td>
                <td>${valor.Apellido}</td>
                <td>${valor.Edad}</td>
                <td>${valor.Genero}</td>
                <td>${valor.Ciudad}</td>
                <td>${valor.Pais}</td>
               
            <td>
            <button class='btn btn-success' onclick='editar(${
              valor.ID
            })'>Editar</button>
            <button class='btn btn-danger' onclick='eliminar(${
              valor.ID
            })'>Eliminar</button>
            <button class='btn btn-info' onclick='ver(${
              valor.ID
            })'>Ver</button>
            </td></tr>
                `;
      });
      $("#tabla_demografia").html(html);
    });
  }
  insertar() {
    var dato = new FormData();
    dato = this.Ruta;
   $.ajax({
    url: "../../Controllers/demografia.controller.php?op=insertar",
    type: "POST",
    data: this.Ruta,
    contentType: false,
    processData: false,
    success: function (res) {
        res = JSON.parse(res);
        if(res === "ok"){
            Swal.fire("Demografia", "Datos Registrados Correctamente", "success");
            todos();
        }else{
            Swal.fire("Error", res, "error"); 
        }
    }
   });
   this.todos()
     
  }
  limpia_Cajas(){
    document.getElementById("Nombre").value = "";  
    document.getElementById("Apellido").value = "";
    document.getElementById("Edad").value = "";
    document.getElementById("Genero").value = "";
    document.getElementById("Ciudad").value = "";
    document.getElementById("Pais").value = "";
    $("#Modal_demografia").modal("hide");
  }
}
