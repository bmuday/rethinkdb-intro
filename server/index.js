const r = require("rethinkdb");

r.connect({
  host: "localhost",
  port: "28015",
  db: "mydb",
})
  .then((c) => {
    // createTable(c, "projects")
    // addProjects(c);
    getUsers(c);
  })
  .catch((err) => {
    throw err;
  });

// Functions CRUD
const createTable = (connection, tableName) => {
  r.tableCreate(tableName).run(connection, (err, result) => {
    if (err) throw err;
    console.log(JSON.stringify(result));
  });
};

const addProjects = (connection) => {
  const projects = [
    { name: "web interface", client: "Renault", year: "2010" },
    { name: "web app", client: "La Poste", year: "2022" },
    { name: "progressive web app", client: "Leboncoin", year: "2021" },
    { name: "mobile app", client: "M6", year: "2015" },
  ];

  r.table("projects")
    .insert(projects)
    .run(connection, (err, result) => {
      if (err) throw err;
      console.log(JSON.stringify(result));
    });
};

const getUsers = (connection) => {
  r.table("projects").run(connection, (err, cursor) => {
    if (err) throw err;
    cursor.toArray((err, result) => {
      if (err) throw err;
      console.log(JSON.stringify(result));
    });
  });
};
