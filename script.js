'use strict';

//dom elements
const API_KEY = '{{IPIFY_API_KEY}}';
const searchInput = document.getElementById('searchInput');
const searchBtn = document.querySelector('.search-button');
const notification = document.querySelector('.notification');
const ipAddress = document.getElementById('ipAddress');
let result;

function notificationFunc(msg) {
  notification.textContent = msg;
  notification.classList.remove('hidden');
  setTimeout(() => {
    notification.classList.add('hidden');
  }, 2000);
}

function searchBtnFunc() {
  if (searchInput.trim === '') {
    notification('No value found');
    return;
  }
  fetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${searchInput.value}`
  )
    .then((response) => {
      if (!response.ok) {
        notification('Error fetching data');
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
}
searchBtn.addEventListener('click', searchBtnFunc);
