import studentdb from "./module.js";

let db = studentdb("studentdb", { students: `++id,name,sem,branch` });

// input tages

const userid = document.getElementById("userid");
const studentname = document.getElementById("studentname");
const sem = document.getElementById("sem");
const branch = document.getElementById("branch");

// buttons
const btncreate = document.getElementById("btn-create");
const btnread = document.getElementById("btn-read");
const btnupdate = document.getElementById("btn-update");
const btndelete = document.getElementById("btn-delete");

//insert value by using create button
