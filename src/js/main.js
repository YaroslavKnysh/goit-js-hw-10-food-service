import menuJson from './menu.json';
import menuTpl from '../templates/menu.hbs';

const themeSwitchControl = document.querySelector('.theme-switch__control');
const body = document.querySelector('body');
const menuListEl = document.querySelector('.js-menu');
const themeSwitchInput = document.querySelector('.theme-switch__toggle');
const themeSwitchMarker = document.querySelector('.theme-switch__marker');

const itemEl = addItemToList(menuJson);
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
body.classList.add(Theme.LIGHT);

function addItemToList(menuJson) {
  return menuTpl({ menuJson });
  //  (Вариант, если в файле.hbs не делать через each) return menuJson.map(menuTpl).join('');
}

menuListEl.insertAdjacentHTML('beforeend', itemEl);

themeSwitchInput.addEventListener('change', changeThemeOfPage);

// =======Доп вариант========
// function changeThemeOfPage(e) {
//   if ((e.checked = true)) {
//     body.classList.toggle('dark-theme');
//   }
// }
function changeThemeOfPage(e) {
  if (e.target.checked) {
    body.classList.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('theme', body.className);
  } else {
    body.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('theme', body.className);
  }
}
body.className = localStorage.getItem('theme');
if (body.className === Theme.DARK) {
  themeSwitchInput.checked = true;
}
