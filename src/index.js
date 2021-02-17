import './styles.css';
import './js/notifications';
import debounce from 'lodash.debounce';
import articlesTpl from './templates/articles.hbs';
import '@pnotify/core/dist/BrightTheme.css'; 
import { alert } from '@pnotify/core';
import fetchCountries from './js/fetchCountries';
import markup from './js/markup';


const refs = {
  listItemContainer: document.querySelector('.js-countries'),
  searchInput: document.querySelector('.js-searchInput'),
};

refs.searchInput.addEventListener('input', debounce(loadCountries, 500));

function loadCountries(event) {
  event.preventDefault();

  const inputValue = event.target.value.trim(); 

  refs.listItemContainer.innerHTML = '';

  if (inputValue) {
  
    fetchCountries(inputValue).then(data => markup(data));
  } else {
    alert({
      text: 'Please enter country name',
      type: 'info',
    });
  }
} 