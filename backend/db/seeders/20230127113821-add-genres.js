/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Genres',
      [
        {
          title: 'фантастика',
          image: 'https://static.okko.tv/images/v2/7197997,18019466,19282070?title=%D0%A4%D0%B0%D0%BD%D1%82%D0%B0%D1%81%D1%82%D0%B8%D0%BA%D0%B0&presetId=6001&width=493&scale=2&quality=80&mediaType=webp',
        },
        {
          title: 'боевик',
          image: 'https://static.okko.tv/images/v2/19920609,15556238,19834404?title=%D0%91%D0%BE%D0%B5%D0%B2%D0%B8%D0%BA%D0%B8&presetId=6001&width=493&scale=2&quality=80&mediaType=webp',
        },
        {
          title: 'триллер',
          image: 'https://static.okko.tv/images/v2/15105241,14414025,16430855?title=%D0%A2%D1%80%D0%B8%D0%BB%D0%BB%D0%B5%D1%80%D1%8B&presetId=6001&width=493&scale=2&quality=80&mediaType=webp',
        },
        {
          title: 'приключения',
          image: 'https://static.okko.tv/images/v2/18219091,7192674,7197843?title=%D0%9F%D1%80%D0%B8%D0%BA%D0%BB%D1%8E%D1%87%D0%B5%D0%BD%D0%B8%D1%8F&presetId=6001&width=493&scale=2&quality=80&mediaType=webp',
        },
        {
          title: 'мелодрама',
          image: 'https://static.okko.tv/images/v2/7197868,16430477,16565674?title=%D0%9C%D0%B5%D0%BB%D0%BE%D0%B4%D1%80%D0%B0%D0%BC%D1%8B&presetId=6001&width=493&scale=2&quality=80&mediaType=webp',
        },
        {
          title: 'комедия',
          image: 'https://static.okko.tv/images/v2/7192557,7228949,18308986?title=%D0%9A%D0%BE%D0%BC%D0%B5%D0%B4%D0%B8%D0%B8&presetId=6001&width=493&scale=2&quality=80&mediaType=webp',
        },
        {
          title: 'семейный',
          image: 'https://static.okko.tv/images/v2/18342626,19077563,14412932?title=%D0%A1%D0%B5%D0%BC%D0%B5%D0%B9%D0%BD%D0%BE%D0%B5&presetId=6001&width=493&scale=2&quality=80&mediaType=webp',
        },
        {
          title: 'музыка',
          image: 'https://static.okko.tv/images/v2/14425564,14406709,16430585?title=%D0%9C%D1%83%D0%B7%D1%8B%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%B5&presetId=6001&width=493&scale=2&quality=80&mediaType=webp',
        },
        {
          title: 'драма',
          image: 'https://static.okko.tv/images/v2/14423683,14430187,14402608?title=%D0%94%D1%80%D0%B0%D0%BC%D1%8B&presetId=6001&width=493&scale=2&quality=80&mediaType=webp',
        },
        {
          title: 'детектив',
          image: 'https://static.okko.tv/images/v2/19481410,8625727,16603450?title=%D0%94%D0%B5%D1%82%D0%B5%D0%BA%D1%82%D0%B8%D0%B2%D1%8B&presetId=6001&width=493&scale=2&quality=80&mediaType=webp',
        },
        {
          title: 'криминал',
          image: 'https://static.okko.tv/images/v2/15812428,15773673,18356398?title=%D0%9A%D1%80%D0%B8%D0%BC%D0%B8%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%B5&presetId=6001&width=493&scale=2&quality=80&mediaType=webp',
        },
        {
          title: 'фэнтези',
          image: 'https://static.okko.tv/images/v2/16382005,14731154,14416132?title=%D0%A4%D1%8D%D0%BD%D1%82%D0%B5%D0%B7%D0%B8&presetId=6001&width=493&scale=2&quality=80&mediaType=webp',
        },
        {
          title: 'спорт',
          image: '',
        },
        {
          title: 'биография',
          image: 'https://static.okko.tv/images/v2/7190029,14425985,19832007?title=%D0%91%D0%B8%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D0%B8&presetId=6001&width=493&scale=2&quality=80&mediaType=webp',
        },
        {
          title: 'история',
          image: '',
        },
        {
          title: 'военный',
          image: 'https://static.okko.tv/images/v2/15775995,14448847,16567542?title=%D0%92%D0%BE%D0%B5%D0%BD%D0%BD%D0%BE%D0%B5&presetId=6001&width=493&scale=2&quality=80&mediaType=webp',
        },
        {
          title: 'ужасы',
          image: '',
        },
        {
          title: 'вестерн',
          image: '',
        },
        {
          title: 'фильм-нуар',
          image: '',
        },
        {
          title: 'мюзикл',
          image: 'https://static.okko.tv/images/v2/14425564,14406709,16430585?title=%D0%9C%D1%83%D0%B7%D1%8B%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%B5&presetId=6001&width=493&scale=2&quality=80&mediaType=webp',
        },
        {
          title: 'аниме',
          image: 'https://static.okko.tv/images/v2/12489367,14434469,14410016?title=%D0%90%D0%BD%D0%B8%D0%BC%D0%B5&presetId=6001&width=493&scale=2&quality=80&mediaType=webp',
        },
        {
          title: 'мультфильм',
          image: 'https://static.okko.tv/images/v2/16573069,14403006,17768275?title=%D0%9C%D1%83%D0%BB%D1%8C%D1%82%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D1%8B&presetId=6001&width=493&scale=2&quality=80&mediaType=webp',
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Genres', null, {});
  },
};
