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
  $.get("../../Controllers/demografia.controller.php?op=" + this.Ruta, (res) => {
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
  dato = this.Pais;
  $.ajax({
    url: "../../Controllers/demografia.controller.php?op=insertar",
    type: "POST",
    data: dato,
    contentType: false,
    processData: false,
    success: function (res) {
      res = JSON.parse(res);
      if (res === "ok") {
        Swal.fire("demografia", "Datos Registrados", "success");
        todos_controlador();
      } else {
        Swal.fire("Error", res, "error");
      }
    },
  });
  this.limpia_Cajas();
}
uno() {
  var ID = this.ID;
  $.post(
    "../../Controllers/demografia.controller.php?op=uno",
    { ID: ID },
    (res) => {
      console.log(res);
      res = JSON.parse(res);
      $("#ID").val(res.ID);
      $("#Nombre").val(res.Nombre);
      $("#Apellido").val(res.Apellido);
      $("#Edad").val(res.Edad);
      $("#Genero").val(res.Genero);
      $("#Ciudad").val(res.Ciudad);
      $("#Pais").val(res.Pais);
    }
  );
  $("#Modal_demografia").modal("show");
}

editar() {
  var dato = new FormData();
  dato = this.Pais;
  $.ajax({
    url: "../../Controllers/demografia.controller.php?op=actualizar",
    type: "POST",
    data: dato,
    contentType: false,
    processData: false,
    success: function (res) {
      res = JSON.parse(res);
      if (res === "ok") {
        Swal.fire("Demografia", "Datos Registrados", "success");
        todos_controlador();
      } else {
        Swal.fire("Error", res, "error");
      }
    },
  });
  this.limpia_Cajas();
}

eliminar() {
  var ID = this.ID;

  Swal.fire({
    title: "Demografia",
    text: "Esta seguro de eliminar los datos",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Eliminar",
  }).then((result) => {
    if (result.isConfirmed) {
      $.post(
        "../../Controllers/demografia.controller.php?op=eliminar",
        { ID: ID },
        (res) => {
          console.log(res);
          
          res = JSON.parse(res);
          if (res === "ok") {
            Swal.fire("Demografia", "Datos Eliminados", "success");
            todos_controlador();
          } else {
            Swal.fire("Error", res, "error");
          }
        }
      );
    }
  });

  this.limpia_Cajas();
}
limpia_Cajas() {
  document.getElementById("Nombre").value = "";
  document.getElementById("Apellido").value = "";
  document.getElementById("Edad").value = "";
  document.getElementById("Genero").value = "";
  document.getElementById("Ciudad").value = "";
  document.getElementById("Pais").value = "";
  $("#ID").val("");

  $("#Modal_demografia").modal("hide");
}
}