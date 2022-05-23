const express = require("express");
const cors = require("cors");
const app = express();
var corsOptions = {
  origin: '*',
};

app.use(cors(corsOptions));
app.options('*', cors());

// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// set up database 
const db = require("./app/models");
// for not to recreate each time database but add new things
 db.sequelize.sync();
// for devel to recreate each time database 
//db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
//});
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

// app.get("tutorials/view", (req, res) => {
//   alert('testing')
//   res.send(res.json());
// });

// app.get('/add',(req,res)=> {
//   res.send({title:'tit',description:'des'})
// })
// app.get('/view',(req,res)=> {
//   res.send({title:'sevlete',description:'sevlete'})
// })
// app.get('/delete',(req,res)=> {
//   res.send()
// })
// app.get('/search',(req,res)=> {
//   res.send(res.body)
// })

require("./app/routes/movie.routes")(app);
// require("./app/routes/movie2.routes")(app);
// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});