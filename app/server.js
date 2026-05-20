const express = require('express');
const { Client } = require('pg');

const app = express();

const client = new Client({
    user: 'admin',
    host: 'postgres',
    database: 'proyecto_db',
    password: 'admin123',
    port: 5432,
});

client.connect()
    .then(() => console.log('Conectado a PostgreSQL'))
    .catch(err => console.error('Error conexión PostgreSQL', err));

app.get('/', (req, res) => {
    res.json({
        mensaje: 'API funcionando correctamente 🚀'
    });
});

app.listen(3000, () => {
    console.log('Servidor Node.js en puerto 3000');
});
