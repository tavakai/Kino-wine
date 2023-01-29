const axios = require('axios');
const fs = require('fs/promises');
require('dotenv').config();
const path = require('path');

const filePath = path.join(__dirname, '../db/id.txt');
async function getIds() {
  return (await fs.readFile(filePath, 'utf-8')).split('\n').slice(0, -1);
}

const genres = ['фантастика', 'боевик', 'триллер', 'приключения', 'мелодрама', 'комедия', 'семейный', 'музыка', 'драма', 'детектив', 'криминал', 'фэнтези', 'спорт', 'биография', 'история', 'военный', 'ужасы', 'вестерн', 'фильм-нуар', 'мюзикл', 'аниме', 'мультфильм'];

const getData = async () => {
  const results = [];
  const genresRes = [];
  const typesRes = [];
  const genreMoviesRes = [];
  const actorMoviesRes = [];
  const allActors = [];
  const ids = await getIds();

  for (let i = 0; i < ids.length; i++) {
    let resActors = [];
    const request = await axios.get(`https://api.kinopoisk.dev/movie?field=id&search=${ids[i]}&token=${process.env.TOKEN}`);
    // console.log(request);
    const res = request.data;

    const resGenres = res.genres.map((genre) => genre.name);
    genresRes.push(...resGenres);

    resActors = res.persons
      .filter((person) => person.enProfession === 'actor')
      .map((actor) => ({
        fullname: actor.name,
        image: actor.photo,
        kp_id: actor.id,
      }));

    allActors.push(...resActors);

    typesRes.push(res.type);

    const directors = res.persons
      .filter((person) => person.enProfession === 'director')
      .map((director) => director.name);

    results.push({
      type_id: res.typeNumber || 1,
      kp_id: res.id || 0,
      title: res.name || '',
      year: res.year || 0,
      description: res.description || '',
      country: res.countries[0].name || '',
      image: res.poster.url || '',
      director: JSON.stringify(directors) || '',
      path_video: '',
      path_trailer: res.videos.trailers[0].url || '',
      duration: res.movieLength || 0,
      rating: String(res.rating.kp).slice(0, -1) || '',
      fees: res.fees.world.value || '',
      ageRating: res.ageRating || 0,
      productionCompanies: res.productionCompanies[0]?.name || '',
      similarMovies: JSON.stringify(res.similarMovies) || '',
      actors: JSON.stringify(resActors) || '',
      subscription: true,
    });

    genres.map((genre, ind) => {
      if (JSON.stringify(res.genres).includes(genre)) {
        genreMoviesRes.push({
          genre_id: ind + 1,
          movie_id: i + 1,
        });
      }
      return genreMoviesRes;
    });
  }

  const uniqueGenres = [...new Set(genresRes)];
  const uniqueActors = [...new Set(allActors)];
  const uniqueTypes = [...new Set(typesRes)];

  function getActorMovies() {
    for (let i = 0; i < results.length; i++) {
      for (let j = 0; j < uniqueActors.length; j++) {
        if (results[i].actors.includes(uniqueActors[j].fullname)) {
          actorMoviesRes.push({
            movie_id: i + 1,
            actor_id: j + 1,
          });
        }
      }
    }
    return actorMoviesRes;
  }

  const actorMoviesSeed = getActorMovies();

  return {
    results, uniqueGenres, uniqueActors, uniqueTypes, genreMoviesRes, actorMoviesSeed,
  };
};

module.exports = { getData };
