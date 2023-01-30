import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function MyButton() {
  const { id } = useParams()

  const desk = [
    {
      id: 298,
      title: 'Амели ',
      year: 2001,
      description: 'Знаете ли вы, что все события, происходящие в нашем мире, даже самые незначительные, взаимосвязаны самым удивительным и чудесным образом?Как полет крошечной мухи может вызвать где-то далеко мощный ураган, так и странные и, на первый взгляд, непонятные поступки тихой и одинокой девушки, живущей в мире своих фантазий, могут навсегда изменить жизнь совершенно разных людей, подарив им счастье и раскрасив окружающий мир яркими красками. Эту девушку зовут Амели Пулен.',
      country: 'Франция',
      image: 'https://st.kp.yandex.net/images/film_big/341.jpg',
      path_trailer: 'https://www.youtube.com/embed/HUECWi5pX7o',
      duration: '122',
      rating: 8,
      director: '["Жан-Пьер Жёне"]',
      productionCompanies: 'France 3 Cinéma',
      actors: '[{"fullname":"Одри Тоту","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_433.jpg","kp_id":433},{"fullname":"Матьё Кассовиц","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_434.jpg","kp_id":434},{"fullname":"Рюфюс","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_435.jpg","kp_id":435},{"fullname":"Лорелла Кравотта","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_448.jpg","kp_id":448},{"fullname":"Серж Мерлен","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_446.jpg","kp_id":446},{"fullname":"Жамель Деббуз","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_447.jpg","kp_id":447},{"fullname":"Клотильд Молле","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_445.jpg","kp_id":445},{"fullname":"Клер Морье","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_444.jpg","kp_id":444},{"fullname":"Изабель Нанти","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_443.jpg","kp_id":443},{"fullname":"Доминик Пинон","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_439.jpg","kp_id":439},{"fullname":"Артюс де Пенгерн","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_437.jpg","kp_id":437},{"fullname":"Иоланда Моро","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_436.jpg","kp_id":436},{"fullname":"Урбен Канселье","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_438.jpg","kp_id":438},{"fullname":"Морис Бенишу","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_440.jpg","kp_id":440},{"fullname":"Мишель Робен","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_442.jpg","kp_id":442},{"fullname":"Андре Даман","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_458.jpg","kp_id":458},{"fullname":"Клод Перрон","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_441.jpg","kp_id":441},{"fullname":"Армель","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_449.jpg","kp_id":449},{"fullname":"Тикки Ольгадо","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_453.jpg","kp_id":453},{"fullname":"Кевин Фернандес","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_472.jpg","kp_id":472},{"fullname":"Флора Гие","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_450.jpg","kp_id":450},{"fullname":"Амори Бабо","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_1076303.jpg","kp_id":1076303},{"fullname":"Андре Дюссолье","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_454.jpg","kp_id":454},{"fullname":"Эжен Бертье","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_457.jpg","kp_id":457},{"fullname":"Мэрион Прессбургер","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_460.jpg","kp_id":460},{"fullname":"Шарль-Роже Бур","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_461.jpg","kp_id":461},{"fullname":"Люк Палюн","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_462.jpg","kp_id":462},{"fullname":"Фабьен Шода","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_463.jpg","kp_id":463},{"fullname":"Доминик Беттенфельд","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_456.jpg","kp_id":456},{"fullname":"Жак Виала","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_464.jpg","kp_id":464},{"fullname":"Фабьен Беар","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_465.jpg","kp_id":465},{"fullname":"Джонатан Джосс","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_1208522.jpg","kp_id":1208522},{"fullname":"Жан-Пьер Беккер","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_467.jpg","kp_id":467},{"fullname":"Жан Дарье","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_452.jpg","kp_id":452},{"fullname":"Тьерри Гибо","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_468.jpg","kp_id":468},{"fullname":"Франсуа Берковичи","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_469.jpg","kp_id":469},{"fullname":"Франк Монье","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_447876.jpg","kp_id":447876},{"fullname":"Гийом Вири","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_470.jpg","kp_id":470},{"fullname":"Валери Заррук","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_471.jpg","kp_id":471},{"fullname":"Мари-Лор Дикуру","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_1960244.jpg","kp_id":1960244},{"fullname":"Софи Теллье","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_474.jpg","kp_id":474},{"fullname":"Жеральд Вейнган","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_475.jpg","kp_id":475},{"fullname":"Франсуа Вио","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_476.jpg","kp_id":476},{"fullname":"Поль Даре","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_477.jpg","kp_id":477},{"fullname":"Марк Амио","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_455.jpg","kp_id":455},{"fullname":"Мириам Лаббе","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_478.jpg","kp_id":478},{"fullname":"Жан Руперт","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_499.jpg","kp_id":499},{"fullname":"Фрэнки Пэйн","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_459.jpg","kp_id":459},{"fullname":"Юлианна Ковач","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_480.jpg","kp_id":480},{"fullname":"Филипп Пеймбланк","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_481.jpg","kp_id":481},{"fullname":"Мади Малру","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_482.jpg","kp_id":482},{"fullname":"Монетт Малру","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_483.jpg","kp_id":483},{"fullname":"Робер Гендрю","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_479.jpg","kp_id":479},{"fullname":"Валериан де Вилленьюв","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_484.jpg","kp_id":484},{"fullname":"Исис Пераде","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_485.jpg","kp_id":485},{"fullname":"Раймонда Эдлин","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_486.jpg","kp_id":486},{"fullname":"Кристиана Бопп","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_487.jpg","kp_id":487},{"fullname":"Тьерри Арфюлльере","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_488.jpg","kp_id":488},{"fullname":"Джерри Лукас","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_489.jpg","kp_id":489},{"fullname":"Патрик Пару","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_490.jpg","kp_id":490},{"fullname":"Франсуа Обино","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_491.jpg","kp_id":491},{"fullname":"Филипп Ботье","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_492.jpg","kp_id":492},{"fullname":"Карин Асур","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_401826.jpg","kp_id":401826},{"fullname":"Режис Яконо","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_493.jpg","kp_id":493},{"fullname":"Франк-Оливье Бонне","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_494.jpg","kp_id":494},{"fullname":"Ален Флоре","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_495.jpg","kp_id":495},{"fullname":"Жан-Поль Бриссар","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_496.jpg","kp_id":496},{"fullname":"Фредерик Миттерран","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_498.jpg","kp_id":498},{"fullname":"Дин Байкан","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_728126.jpg","kp_id":728126},{"fullname":"Джоан Беннетт","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_177573.jpg","kp_id":177573},{"fullname":"Клемент Шебли","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_569835.jpg","kp_id":569835},{"fullname":null,"image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_2790235.jpg","kp_id":2790235},{"fullname":"Руди Галиндо","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_500.jpg","kp_id":500},{"fullname":"Валери Лабро","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_60468.jpg","kp_id":60468},{"fullname":"Жан-Мишель Ларке","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_502.jpg","kp_id":502},{"fullname":"Мануш","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_608655.jpg","kp_id":608655},{"fullname":"Федерико Мартин Баамонтес","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_711430.jpg","kp_id":711430},{"fullname":"Тьерри Ролан","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_503.jpg","kp_id":503},{"fullname":"Сестра Розетта Тарп","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_504.jpg","kp_id":504},{"fullname":"Жак Тибо","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_497.jpg","kp_id":497},{"fullname":"Спенсер Трэйси","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_178216.jpg","kp_id":178216}]',
      logo: 'https://avatars.mds.yandex.net/get-ott/224348/2a0000017a67cdb0b0de64540af6310bf396/orig',
    },
    {
      id: 299,
      director: '["Лана Вачовски","Лилли Вачовски"]',
      productionCompanies: 'Village Roadshow Pictures',
      actors: '[{"fullname":"Киану Ривз","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_7836.jpg","kp_id":7836},{"fullname":"Лоренс Фишбёрн","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_9838.jpg","kp_id":9838},{"fullname":"Хьюго Уивинг","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_1491.jpg","kp_id":1491},{"fullname":"Кэрри-Энн Мосс","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_6226.jpg","kp_id":6226},{"fullname":"Джада Пинкетт Смит","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_520.jpg","kp_id":520},{"fullname":"Глория Фостер","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_23331.jpg","kp_id":23331},{"fullname":"Хэролд Перрино","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_12193.jpg","kp_id":12193},{"fullname":"Моника Беллуччи","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_27169.jpg","kp_id":27169},{"fullname":"Ламбер Вильсон","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_22343.jpg","kp_id":22343},{"fullname":"Рэндолл Дак Ким","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_26073.jpg","kp_id":26073},{"fullname":"Гарри Дж. Ленникс","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_4050.jpg","kp_id":4050},{"fullname":"Энтони Цербе","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_22963.jpg","kp_id":22963},{"fullname":"Нона Гэй","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_521.jpg","kp_id":521},{"fullname":"Хельмут Бакайтис","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_31355.jpg","kp_id":31355},{"fullname":"Адриан Реймент","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_31341.jpg","kp_id":31341},{"fullname":"Нил Реймент","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_31342.jpg","kp_id":31342},{"fullname":"Дэниэл Бернхард","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_31336.jpg","kp_id":31336},{"fullname":"Колин Чоу","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_31339.jpg","kp_id":31339},{"fullname":"Йен Блисс","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_4701.jpg","kp_id":4701},{"fullname":"Ли Уоннелл","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_31399.jpg","kp_id":31399},{"fullname":"Джина Торрес","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_31393.jpg","kp_id":31393},{"fullname":"Нэтаниэл Лис","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_31337.jpg","kp_id":31337},{"fullname":"Рой Джонс мл.","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_31372.jpg","kp_id":31372},{"fullname":"Дэвид Килд","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_728500.jpg","kp_id":728500},{"fullname":"Мэтт МакКольм","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_31338.jpg","kp_id":31338},{"fullname":"Корнел Уэст","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_31398.jpg","kp_id":31398},{"fullname":"Стив Бастони","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_31356.jpg","kp_id":31356},{"fullname":"Энтони Вон","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_31344.jpg","kp_id":31344},{"fullname":"Клэйтон Уотсон","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_31397.jpg","kp_id":31397},{"fullname":"Рэй Энтони","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_31352.jpg","kp_id":31352},{"fullname":"Кристин Ану","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_31353.jpg","kp_id":31353},{"fullname":"Энди Арнесс","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_4215.jpg","kp_id":4215},{"fullname":"Алима Эштон-Шейбу","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_31354.jpg","kp_id":31354},{"fullname":"Дон Бейти","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_30855.jpg","kp_id":30855},{"fullname":"Валери Берри","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_31357.jpg","kp_id":31357},{"fullname":"Лилиана Богатко","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_31358.jpg","kp_id":31358},{"fullname":"Майкл Бадд","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_31359.jpg","kp_id":31359},{"fullname":"Стоуни Бурк","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_3567.jpg","kp_id":3567},{"fullname":"Келли Батлер","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_31360.jpg","kp_id":31360},{"fullname":"Жозефин Бернс","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_31361.jpg","kp_id":31361},{"fullname":"Норис Кампос","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_31362.jpg","kp_id":31362},{"fullname":"Пол Коттер","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_31363.jpg","kp_id":31363},{"fullname":"Марлен Камминс","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_31364.jpg","kp_id":31364},{"fullname":"Аттила Дэвидхэйзи","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_31365.jpg","kp_id":31365},{"fullname":"Эсси Дэвис","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_31366.jpg","kp_id":31366},{"fullname":"Террелл Диксон","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_31367.jpg","kp_id":31367},{"fullname":"Нэш Эдгертон","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_31368.jpg","kp_id":31368},{"fullname":"Дэвид Франклин","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_31369.jpg","kp_id":31369},{"fullname":"Остин Галуппо","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_31370.jpg","kp_id":31370},{"fullname":"Дэрил Хит","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_31371.jpg","kp_id":31371},{"fullname":"Малкольм Кеннард","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_31373.jpg","kp_id":31373},{"fullname":"Кристофер Кирби","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_31374.jpg","kp_id":31374},{"fullname":"Питер Ламб","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_31375.jpg","kp_id":31375},{"fullname":"Тони Линч","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_31376.jpg","kp_id":31376},{"fullname":"Роберт Маммоне","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_10321.jpg","kp_id":10321},{"fullname":"Джошуа Мбакве","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_31377.jpg","kp_id":31377},{"fullname":"Скотт МакЛин","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_31378.jpg","kp_id":31378},{"fullname":"Крис Митчелл","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_31379.jpg","kp_id":31379},{"fullname":"Стив Моррис","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_19262.jpg","kp_id":19262},{"fullname":"Тори Массет","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_31380.jpg","kp_id":31380},{"fullname":"Рене Науфаху","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_31381.jpg","kp_id":31381},{"fullname":"Робин Невин","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_31382.jpg","kp_id":31382},{"fullname":"Дэвид Но","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_31383.jpg","kp_id":31383},{"fullname":"Женевьев О’Рейли","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_31340.jpg","kp_id":31340},{"fullname":"Сократис Отто","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_31384.jpg","kp_id":31384},{"fullname":"Монтано Рэйн","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_31385.jpg","kp_id":31385},{"fullname":"Руперт Рейд","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_31386.jpg","kp_id":31386},{"fullname":"Дэвид Робертс","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_31387.jpg","kp_id":31387},{"fullname":"Шэйн С. Родриго","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_31388.jpg","kp_id":31388},{"fullname":"Ник Скоггин","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_3572.jpg","kp_id":3572},{"fullname":"Кевин Скотт","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_31389.jpg","kp_id":31389},{"fullname":"Тахей Симпсон","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_31390.jpg","kp_id":31390},{"fullname":"Фрэнки Стивенс","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_31391.jpg","kp_id":31391},{"fullname":"Никандро Томас","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_31392.jpg","kp_id":31392},{"fullname":"Эндрю Валли","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_31394.jpg","kp_id":31394},{"fullname":"Стив Велла","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_31395.jpg","kp_id":31395},{"fullname":"Джон Уолтон","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_31396.jpg","kp_id":31396},{"fullname":"Бернард Уайт","image":"https://st.kp.yandex.net/images/actor_iphone/iphone360_11413.jpg","kp_id":11413}]',

      title: 'Матрица: Перезагрузка',
      year: 2003,
      logo: 'https://avatars.mds.yandex.net/get-ott/1652588/2a00000170ed41c7e28d1dcfcb8f8cb7e8a3/orig',

      description: 'Американские, британские и канадские военнопленные осуществляют массовый побег из немецкого лагеря во время Второй мировой войны.',
      country: 'США',
      image: 'https://st.kp.yandex.net/images/film_big/392.jpg',
      path_trailer: 'https://www.youtube.com/watch?v=r9Q_WESQUVw',
      duration: '172',
      rating: 8,
    },

  ]
  return (
    <div>
      {desk.map((el) => <Link to={`/moviepage/${el.id}`}>abc</Link>)}

    </div>
  )
}
