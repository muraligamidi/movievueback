module.exports = (sequelize, Sequelize) => {
  const Movie = sequelize.define("movie", {
    title: {
      type: Sequelize.STRING
    },
    published: {
      type: Sequelize.STRING
    },
    poster: {
      type: Sequelize.STRING
    },
  
    description: {
      type: Sequelize.STRING
    },
    tracks: {
      type: Sequelize.ARRAY(Sequelize.STRING)
    }
    
    
  });
  return Movie;
};