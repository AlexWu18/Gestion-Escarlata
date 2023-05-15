const cargarPeliculas = async () => {
try{
    const respuesta = await fetch(`https://nodejs-sequelize-restapi-mssql-production.up.railway.app/api/v1/Persona`);

    console.log(respuesta);

    // Si 
    const datos = await respuesta.json();
    console.log(datos.result);

}
catch (error) {
    console.log(error);
}
}
cargarPeliculas();