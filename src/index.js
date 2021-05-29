import './sass/main.scss';

const { alert, notice, info, success, error } = require('@pnotify/core');

import countryInfo from './template/info-country.hbs';
import countryList from './template/country-list.hbs';

var debounce = require('lodash.debounce');

const boxInfo = document.querySelector('.js-box')
const searchInput = document.querySelector('.js-input')

searchInput.addEventListener('input', debounce(() => {
    const nameCountry = searchInput.value.trim()
    boxInfo.innerHTML='';
    if(nameCountry!=='') {
        const urlCountry = `https://restcountries.eu/rest/v2/name/${nameCountry}`
        makeSearchCountry(urlCountry)
    }},500),
)

function makeSearchCountry (url) {
    fetch(url).then(response => {
        return response.json();
    }).then(country => {
        if(1 < country.length && country.length < 10) {
            const markupList = countryList(country)
            boxInfo.innerHTML = markupList;
        }
        
        if(country.length===1) {
        boxInfo.innerHTML = country.map(c => countryInfo(c));
        }

        if(country.length > 10 || searchInput.value.length===1) {
            boxInfo.innerHTML='';
            const myError = error({
                text: "Too many matches found. Please enter a more specific query",
            });
        }
    })
}



