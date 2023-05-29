document.getElementById("appointment-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe
  
    // Obtén los valores de los campos del formulario
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;
  
    // Crea un objeto con los datos de la cita
    var appointmentData = {
      name: name,
      email: email,
      date: date,
      time: time
    };
  
    // Realiza la solicitud POST al API
    fetch("URL_DEL_API", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(appointmentData)
    })
    .then(function(response) {
      if (response.ok) {
        // La solicitud fue exitosa
        return response.json();
      } else {
        // La solicitud falló
        throw new Error("Error al agendar la cita. Por favor, inténtalo nuevamente.");
      }
    })
    .then(function(data) {
      // La cita fue agendada correctamente
      var confirmationMessage = "¡Cita agendada!\n\n" +
                                "Nombre: " + data.name + "\n" +
                                "Email: " + data.email + "\n" +
                                "Fecha: " + data.date + "\n" +
                                "Hora: " + data.time;
      alert(confirmationMessage);
    })
    .catch(function(error) {
      // Ocurrió un error durante la solicitud
      alert(error.message);
    });
  });
  
