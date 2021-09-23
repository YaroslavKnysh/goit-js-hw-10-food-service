import menuJson from './menu.json';
import menuTpl from '../templates/menu.hbs';

const themeSwitchControl = document.querySelector('.theme-switch__control');
const menuListEl = document.querySelector('.js-menu');
const themeSwitchInput = document.querySelector('.theme-switch__toggle');
const themeSwitchMarker = document.querySelector('.theme-switch__marker');
console.log(themeSwitchControl);
console.log(themeSwitchInput);
console.log(themeSwitchMarker);
console.log(menuListEl);
console.log(menuTpl);
console.log(menuJson);

console.log(menuTpl({ menuJson }));

const itemEl = addItemToList(menuJson);
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

function addItemToList(menuJson) {
  return menuTpl({ menuJson });
  //   return menuJson.map(menuTpl).join('');
}

menuListEl.insertAdjacentHTML('beforeend', itemEl);
