
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío del formulario por defecto

    // Obtener los valores del formulario
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Realizar la llamada GET al API
    fetch('https://nodejs-sequelize-restapi-mssql-production.up.railway.app/api/v1/Persona')
    .then(response => response.json())
    .then(data => {
        // Verificar si la información ingresada es válida
        var isValid = data.body.some(persona => persona.Correo_Persona === email && persona.Contrasena_Persona === password);

        if (isValid) {
            // Obtener el nombre de la persona
            var persona = data.body.find(persona => persona.Correo_Persona === email);

            // Mostrar la alerta con el nombre de la persona
            alert("Bienvenido !");

            // Redirigir a otra página
            window.location.href = "Principal G.html";
        } else {
            alert("La información ingresada no es válida. Por favor, verifique los datos.");
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});



