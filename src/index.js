const express = require( 'express');
const cors = require( 'cors');
const mysql = require( 'mysql2/promise');

const app = express ();
app.use(cors());

app.use(express.json({ limit: "10mb" }));

const port = 4000;
app.listen(port, () => {
console.log(`App listening on port ${port}`);
});

let connection;

mysql
  .createConnection({
    host: 'sql.freedb.tech',
    database: 'freedb_grupo7',
    user: 'freedb_root_grupo7',
    password: 'KWuEnYU9W2Nc%5a',
  })
  .then(conn => {
    connection = conn;
    connection
      .connect()
      .then(() => {
        console.log(`Conexión establecida con la base de datos (identificador=${connection.threadId})`);
      })
      .catch((err) => {
        console.error('Error de conexion: ' + err.stack);
      });
  })
  .catch((err) => {
    console.error('Error de configuración: ' + err.stack);
  });

  app.get('/api/projects/all', (req, res) => {
    let sql = 'SELECT * FROM projects,authors WHERE projects.fkIdAuthor = authors.idauthor';
    connection
      .query(sql)
      .then(([results, fields]) => {
        console.log('Información recuperada:');
        results.forEach((result) => {
          console.log(result);
        });

        res.json(results);
      })
      .catch((err) => {
        throw err;
      });
})