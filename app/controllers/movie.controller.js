const db = require("../models");
const Movie = db.movies;
const Op = db.Sequelize.Op;
// Create and Save a new Movie
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Movie
  const movie = {
    movieId: req.params.movieId,
    title: req.body.title,
    published: req.body.published ? req.body.published : false,
    poster:req.body.poster,
    description: req.body.description,
    tracks: req.body.tracks ,
  };
  // Save Movie in the database
  Movie.create(movie)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Movie."
      });
    });
};
// Retrieve all Movies from the database.
exports.findAll = (req, res) => {
  const movieId = req.query.movieId;
  var condition = movieId ? {
    movieId: {
      [Op.like]: `%${movieId}%`
    }
  } : null;

  Movie.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving movies."
      });
    });
};
// Find a single Movie with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  Movie.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Movie with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Movie with id=" + id
      });
    });
};
// Update a Movie by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
  Movie.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Movie was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Movie with id=${id}. Maybe Movie was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Movie with id=" + id
      });
    });
};
// Delete a Movie with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  Movie.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Movie was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Movie with id=${id}. Maybe Movie was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Movie with id=" + id
      });
    });
};
// Delete all Movies from the database.
exports.deleteAll = (req, res) => {
  Movie.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Movies were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all movies."
      });
    });
};
// Find all published Movies
exports.findAllPublished = (req, res) => {
  const movieId = req.query.movieId;

  Movie.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving movies."
      });
    });
};