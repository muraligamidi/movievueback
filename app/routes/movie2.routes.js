// module.exports = app => {
//   const movies = require("../controllers/movies.controller.js");
//   var router = require("express").Router();
//   // Create a new Movie for a Tutorial
//   router.post("/:tutorialId/movies/", movies.create);
//   // Retrieve all Lessons for a Tutorial
//   router.get("/:tutorialId/movies/", movies.findAll);
//   // Retrieve all published Lessons for a Tutorial
//   router.get("/:tutorialId/movies/published", movies.findAllPublished);
//   // Retrieve a single Movie with id
//   router.get("/:tutorialId/movies/:id", movies.findOne);
//   // Update a Movie with id
//   router.put("/:tutorialId/movies/:id", movies.update);
//   // Delete a Movie with id
//   router.delete("/:tutorialId/movies/:id", movies.delete);
//   // Delete all Movies
//   router.delete("/:tutorialId/movies/:id", movies.deleteAll);
//   app.use('/api/tutorials', router);
// };

module.exports = app => {
  const movies = require("../controllers/movie2.controller.js");
  var router = require("express").Router();
  // Create a new Movie
  router.post("/", movies.create);
  // Retrieve all Movies
  router.get("/", movies.findAll);
  // Retrieve all published Movies
  router.get("/published", movies.findAllPublished);
  // Retrieve a single Movie with id
  router.get("/:id", movies.findOne);
  // Update a Movie with id
  router.put("/:id", movies.update);
  // Delete a Movie with id
  router.delete("/:id", movies.delete);
  // Delete all Movies
  router.delete("/", movies.deleteAll);
  app.use('/api/movies', router);
};