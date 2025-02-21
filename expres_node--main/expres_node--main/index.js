require("dotenv").config(); // carga la config de variables de entorno


const { neon } = require("@neondatabase/serverless"); // trae la instacia neon

const express = require('express') // trae instacia de express
const app = express() // configura express
const port = 3000 //defgine puerto
const sql = neon(process.env.DATABASE_URL); //se crea la conexion con Neon

app.get('/', async (req, res) => {
    const result = await sql`SELECT version()`; // se ejecuta la consulta SQL
    const { version } = result[0]; //Obtengo el resultado
  res.send('Hello World!' + version)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

