import dishes from '../menu.json';
import template from '../templates/dish.hbs';

const ulMenuRef = document.querySelector('.js-menu');

const dishesList = dishes.map(dish => template(dish)).join('');
ulMenuRef.innerHTML = dishesList;