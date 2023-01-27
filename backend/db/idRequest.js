const axios = require('axios');
const fs = require('fs/promises');
require('dotenv').config();
const path = require('path');

const filePath = path.join(__dirname, '../db/id.txt');
async function getIds() {
  return (await fs.readFile(filePath, 'utf-8')).split('\n').slice(0, -1);
}

const getData = async () => {
  const results = [];
  const genresRes = [];
  const actorsRes = [];
  const typesRes = [];
  const ids = await getIds();

  for (let i = 0; i < ids.length; i++) {
    const request = await axios.get(`https://api.kinopoisk.dev/movie?field=id&search=${ids[i]}&token=${process.env.TOKEN}`);
    // console.log(request);
    const res = request.data;

    const resGenres = res.genres.map((genre) => genre.name);
    genresRes.push(...resGenres);

    const resActors = res.persons.map((actor) => actor.name);
    actorsRes.push(...resActors);

    typesRes.push(res.type);

    results.push({
      type_id: 1,
      title: res.name || '',
      year: res.year || 0,
      description: res.description || '',
      country: res.countries[0].name || '',
      image: res.poster.url || '',
      director: '',
      path_video: '',
      path_trailer: res.videos.trailers[0].url || '',
      duration: res.movieLength || 0,
      rating: res.rating.kp || 0,
      fees: res.fees.world.value || '',
      subscription: true,
    });
  }
  const uniqueGenres = [...new Set(genresRes)];
  const uniqueActors = [...new Set(actorsRes)];
  const uniqueTypes = [...new Set(typesRes)];
  return {
    results, uniqueGenres, uniqueActors, uniqueTypes,
  };
};

module.exports = { getData };
