/* import { render } from 'node-sass'; */
export default 50;

require('./../img/eniac.png');
require('./../img/food.jpg');
require('./../img/hero-small.jpg');
require('./../img/hotel-2.jpg');
require('./../img/house-5.jpeg');
require('./../img/jeans.jpg');
require('./../img/alpunto2.jpg');
require('./../img/mycity.jpg');
const pack = {
  infoPack: [
    {
      name: 'Alpunto',
      image: 'static/alpunto2.jpg',
      text: 'Periódico AL Punto',
    },
    {
      name: 'dominico',
      image: 'static/jeans.jpg',
      text: 'Tienda Dominico',
    },
    {
      name: 'Natours',
      image: 'static/hero-small.jpg',
      text: 'Práctica Natours',
    },
    {
      name: 'Nexter',
      image: 'static/house-5.jpeg',
      text: 'Práctica Nexter',
    },
    {
      name: 'Triller',
      image: 'static/hotel-2.jpg',
      text: 'Práctica Triller',
    },

    {
      name: 'Omnifood',
      image: 'static/food.jpg',
      text: 'Práctica Omnifood',
    },

    {
      name: 'Podcast',
      image: 'static/eniac.png',
      text: 'Práctica podcast',
    },
  ],
};

function sum(acc, val) {
  return (
    acc +
    `
  <div class="brochure__index--card">
    <img src= ${val.image} alt=${val.name} class="brochure__index--img" />
    <div class="brochure__index--container">
      <p>${val.text}</p>
      <button class="button button__red button__small button__small--brochure">
        <a href="#">Ver proyecto</a>
      </button>
    </div>
  </div>
  `
  );
}

const markup = pack.infoPack.reduce(sum, '');

document.addEventListener('DOMContentLoaded', function (event) {
  document
    .querySelector('.brochure__index')
    .insertAdjacentHTML('afterbegin', markup);
});
