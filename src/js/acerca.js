export default 600;
require('./../img/eniac.png');
require('./../img/pc.png');
require('./../img/mycity.jpg');
require('./../img/white_house.jpg');
require('./../img/ice.jpg');
require('./../img/sea_rocks.jpg');
require('./../img/salt.png');
require('./../img/bike.jpg');
require('./../img/tend_camp.jpg');
require('./../img/cascade.jpg');
require('./../img/beach.jpg');

/* const content = `
<h2 class="city__subtitle">
        Bogotá mi ciudad
      </h2>
      <img class="city__picture" src="static/mycity.jpg" alt="Bogota" />
      <p class="city__paragraph">
        Nací en la capital de Colombia, desde entonces he vivido en esta caótica
        pero linda ciudad, aunque la bandeja paisa es de otra región del país es
        mi comida preferida, me gusta viajar en moto y cuando quiero tener un
        reto en la casa armo un rompecabezas. El año 2020 es el año de la
        reinvención gracias a esta oportunidad de la vida ahora me dedico al
        desarrollo web.
      </p>
`;
document.addEventListener('DOMContentLoaded', function (event) {
  document
    .querySelector('.pictures__index')
    .insertAdjacentHTML('afterbegin', content);
}); */

const hobbies = {
  city: {
    title: 'Bogotá mi ciudad',
    image: 'static/mycity.jpg',
    text:
      ' Nací en la capital de Colombia, desde entonces he vivido en esta caótica pero linda ciudad, aunque la bandeja paisa es de otra región del país es mi comida preferida, me gusta viajar en moto y cuando quiero tener un reto armo un rompecabezas. El año 2020 es el año de la reeinvención gracias a esta oportunidad de la vida ahora me dedico al desarrollo web.',
  },
  pictures: [
    {
      url: 'static/white_house.jpg',
      alt: 'white house',
      weight: 1,
    },
    {
      url: 'static/ice.jpg',
      alt: 'ice',
      weight: 2,
    },
    {
      url: 'static/sea_rocks.jpg',
      alt: 'rocks',
      weight: 1,
    },
    {
      url: 'static/salt.png',
      alt: 'salt',
      weight: 2,
    },
    {
      url: 'static/bike.jpg',
      alt: 'bike',
      weight: 2,
    },

    {
      url: 'static/cascade.jpg',
      alt: 'water fall',
      weight: 1,
    },
    {
      url: 'static/tend_camp.jpg',
      alt: 'tend camp',
      weight: 2,
    },
    {
      url: 'static/beach.jpg',
      alt: 'in the beach',
      weight: 1,
    },
  ],
  activity: [
    {
      direction: 1,
      url: 'static/dune.jpg',
      text:
        ' Desde siempre me ha gustado mucho conocer nuevos lugares y vivir nuevas experiencias gracias a lo que muchas paisajes nos orfrecen, espero seguir conociendo muchos más lugares dentro y fuera del país.',
    },
    {
      direction: 2,
      url: 'static/puzzle.jpg',
      text:
        'Todas las personas lo pueden practicar pero solo aquellos con la paciencia suficiente pueden terminar con exito un reto como el de armar un rompecabezas de 1000 piezas en adelante, es muy entretenido y si escoges un buen motivo le darás un significado aún mayor al próximo cuadro que pongas en tu pared.',
    },
    {
      direction: 1,
      url: 'static/bikers.jpg',
      text:
        '  Viajar es muy agradable pero cuando lo haces manejando tu moto y con las personas que comparten experiencias con tigo ese gusto es aún mejor, cada vez que armamos un viaje me da mucha alegría y disfruto al máximo desde el comienzo hasta el fin!',
    },
  ],
};
/////*****************************************  ---CITY---  *****************************************/////
const contenido = function (datos) {
  return `<h2 class="city__subtitle">${datos.title}
    </h2>
      <img class="city__picture" src=${datos.image} alt="Bogota" />
      <p class="city__paragraph">${datos.text}</p>`;
};

/////***************************************  ---PICTURES---  ***************************************/////

function pictures(acc, pick) {
  return (
    acc +
    `   <div class="pictures__index--${pick.weight}">
          <img
            src=${pick.url}
            alt=${pick.alt}
            class="pictures__img"
          />
        </div>`
  );
}

const distribution = hobbies.pictures.reduce(pictures, '');

/////***************************************  ---ACTIVITY---  ***************************************/////

function activities(acc, act) {
  return (
    acc +
    `        <div class="activity__frame activity__frame--${act.direction}">
          <img
            class="activity__picture"
            src=${act.url}
            alt="Duna de arena"
          />
          <p class="activity__paragraph activity__paragraph--${act.direction}">${act.text}</p>
        </div>`
  );
}
const set = hobbies.activity.reduce(activities, '');

/////**************************************  ---Insert HTM---  **************************************/////

document.addEventListener('DOMContentLoaded', function (event) {
  document
    .querySelector('.city')
    .insertAdjacentHTML('afterbegin', contenido(hobbies.city));

  document
    .querySelector('.pictures__index')
    .insertAdjacentHTML('afterbegin', distribution);

  document.querySelector('.activity').insertAdjacentHTML('afterbegin', set);
});
