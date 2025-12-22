'use strict';

//dom elements
const API_KEY = 'at_80uQgCkKAotkZOGru85gCDbqaffrU';
const searchInput = document.getElementById('searchInput');
const searchBtn = document.querySelector('.search-button');
const notification = document.querySelector('.notification');
const ipAddressContent = document.getElementById('ipAddress');
const locationContent = document.getElementById('location');
const timeZoneContent = document.getElementById('timezone');
const ispContent = document.getElementById('isp');
let result;
let latitude;
let longitude;
let map = null;

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
    .then((response) => response.json())
    .then((data) => {
      const ipAddress = data.ip;
      const isp = data.isp;
      const timeZone = data.location.timezone;
      const city = data.location.city;
      const country = data.location.country;
      latitude = data.location.lat;
      longitude = data.location.lng;

      ipAddressContent.textContent = ipAddress;
      locationContent.textContent = `${city}, ${country}`;
      timeZoneContent.textContent = timeZone;
      ispContent.textContent = isp;

      createOrUpdateMap();
    })
    .catch((error) => {
      notificationFunc('Error');
      console.error('Error:', error);
    });
}
searchBtn.addEventListener('click', searchBtnFunc);

function createOrUpdateMap() {
  // Remove existing map if one is already displayed
  if (map) {
    map.remove();
  }
  // Create new map centered on the coordinates with zoom level 13
  map = L.map('map').setView([latitude, longitude], 13);

  // Add OpenStreetMap tile layer to the map
  L.tileLayer('https://{s}tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  // Add a marker pin at the searched coordinates
  var marker = L.marker([latitude, longitude]).addTo(map);
}
