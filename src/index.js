const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");

const app = express();
app.use(cors());

app.use(express.json({ limit: "10mb" }));
app.set("view engine", "ejs");

const serverPort = process.env.PORT || 4000;
app.listen(serverPort, () => {
  console.log(`App listening on port ${serverPort}`);
});

const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger.json");

//Especificar en el server use
app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));

let connection;

mysql
  .createConnection({
    host: "sql.freedb.tech",
    database: "freedb_grupo7",
    user: "freedb_root_grupo7",
    password: "KWuEnYU9W2Nc%5a",
    idleTimeout: 1000000,
  })
  .then((conn) => {
    connection = conn;
    connection
      .connect()
      .then(() => {
        console.log(
          `Conexión establecida con la base de datos (identificador=${connection.threadId})`
        );
      })
      .catch((err) => {
        console.error("Error de conexion: " + err.stack);
      });
  })
  .catch((err) => {
    console.error("Error de configuración: " + err.stack);
  });

app.get("/api/projects/all", (req, res) => {
  let sql =
    "SELECT * FROM projects,authors WHERE projects.fkIdAuthor = authors.idauthor";
  connection
    .query(sql)
    .then(([results, fields]) => {
      console.log("Información recuperada:");
      results.forEach((result) => {
        console.log(result);
      });

      res.json(results);
    })
    .catch((err) => {
      throw err;
    });
});

app.post("/api/projects/add", (req, res) => {
  const data = req.body;
  console.log(data);
  if (
    data.name &&
    data.desc &&
    data.slogan &&
    data.repo &&
    data.demo &&
    data.technologies &&
    data.image &&
    data.autor &&
    data.job &&
    data.photo
  ) {
    let sqlAuthor = "INSERT INTO authors (autor, job, photo) VALUES (?, ?, ?)";
    let valuesAuthor = [data.autor, data.job, data.photo];
    connection.query(sqlAuthor, valuesAuthor).then(([results, fields]) => {
      console.log(results);

      let sqlProjects =
        "INSERT INTO projects (name, slogan, technologies, demo, repo, `desc`, image, fkIdAuthor) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

      let valuesProject = [
        data.name,
        data.desc,
        data.slogan,
        data.repo,
        data.demo,
        data.technologies,
        data.image,
        results.insertId,
      ];
      connection.query(sqlProjects, valuesProject).then(([results, fields]) => {
        let response = {
          success: true,
          cardURL: `http://localhost:4000/api/projects/detail/${results.insertId}`,
        };
        console.log(results);
        res.json(response);
      });
    });
  } else {
    let responseFalse = {
      success: false,
    };
    res.json(responseFalse);
  }
});

app.get("/api/projects/detail/:projectID", (req, res) => {
  const projectID = req.params.projectID;
  const sql =
    "SELECT * FROM projects, authors WHERE projects.fkIdAuthor = authors.idauthor AND idprojects = ?";

  connection
    .query(sql, [projectID])
    .then(([results, fields]) => {
      res.render("project_detail", results[0]);
    })
    .catch((err) => {
      throw err;
    });
});

// delete project
app.delete("/api/projects/delete/:projectID", (req, res) => {
  const projectID = req.params.projectID;
  let sql = "DELETE FROM projects WHERE idprojects = ?; ";
  connection
    .query(sql, [projectID])
    .then(([results, fields]) => {
      console.log("Proyecto eliminado");
      res.json(results);
    })
    .catch((err) => {
      throw err;
    });
});

app.use(express.static("./src/public-react"));
app.use(express.static("./src/public-css/"));
