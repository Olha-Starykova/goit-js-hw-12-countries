  
import '../js/notifications';
import countriesTpl from '../templates/articles.hbs';
import countriesName from '../templates/articlesName.hbs';
import '@pnotify/core/dist/BrightTheme.css';
import { success, error } from '@pnotify/core'; 

const refs = {
  listItemContainer: document.querySelector('.js-countries'),
  searchInput: document.querySelector('.js-searchInput'),
};

function updateCountriesMarkup(data) {
  if (data) {
      if (data.length === 1) {
      refs.listItemContainer.insertAdjacentHTML(
        'beforeend',
        countriesTpl(data),
      );
      success({
        text: 'Success message. You find country!',
      });
    } else if (data.length > 1 && data.length <= 10) {
      refs.listItemContainer.insertAdjacentHTML(
        'beforeend',
        countriesName(data),
      );
      success({
        text: 'Success message. You find a lot of countries!',
      });
    } else {
      error({
        text:
          'Error message! Too many matches found. Please enter a more specific query!',
        delay: 2000,
      });
    }
  } else {
    error({ text: 'No matches found', delay: 2000 });
  }
}

export default updateCountriesMarkup;