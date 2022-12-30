const studentdb = (dbname, table) => {
  // create data base
  const db = new Dexie("students");
  db.version(1).stores(table);
  db.open();

  // const db = new Dexie("myDb");
  // db.version(1).stores({
  //   firends: `name,age`,
  // });
  return db;
};

export default studentdb;
