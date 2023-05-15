const loginForm = document.querySelector('#loginForm');
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    try {
        const response = await fetch('https://nodejs-sequelize-restapi-mssql-production.up.railway.app/api/v1/Persona', 
        {
            method: 'GET',
            body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();

        // Aquí, "data" es la respuesta de tu API. 
        // Necesitas adaptar este código para que funcione con la estructura exacta de la respuesta de tu API.
        if (data.token) {
            localStorage.setItem('token', data.token);
            // Puedes almacenar información del usuario si la API proporciona alguna.
            localStorage.setItem('login_success', JSON.stringify(data.user));
            window.location.href = 'index.html';
        } else {
            // Maneja el error de inicio de sesión aquí.
            alert('Usuario y/o contraseña incorrectos!');
        }
    } catch (error) {
        // Maneja el error de red o de API aquí.
        alert('Error al iniciar sesión. Por favor, inténtalo de nuevo.');
    }
});
