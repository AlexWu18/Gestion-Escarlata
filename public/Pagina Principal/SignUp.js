function submitForm(event) {
    event.preventDefault(); // Prevenir envío del formulario

    // Obtener valores del formulario
    var name = document.getElementById('name').value;
    var lastname = document.getElementById('lastname').value;
    var age = document.getElementById('age').value;
    var birthdate = document.getElementById('birthdate').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var password = document.getElementById('password').value;

    // Crear objeto data
    var data = {
        "Nombre_Persona": name,
        "Apellido_Persona": lastname,
        "Edad_Persona": age,
        "FechaNacimiento_Persona": birthdate,
        "Correo_Persona": email,
        "Numero_Persona": phone,
        "Contrasena_Persona": password
    };

    fetch('https://nodejs-sequelize-restapi-mssql-production.up.railway.app/api/v1/Persona/POST', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Error en la solicitud');
        }
    })
    .then(result => {
        console.log('API response:', result);
        document.getElementById('responseMessage').textContent = 'Solicitud satisfactoria'; // Mostrar mensaje de éxito

        // Redirigir a otra página
        window.location.href = 'Login.html';
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('responseMessage').textContent = 'No se pudo completar la solicitud'; // Mostrar mensaje de error
    });
}

