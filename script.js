'use strict';

// API KEY AND DOM ELEMENTS

// IPify Geolocation API key for fetching IP address data
const API_KEY = 'at_80uQgCkKAotkZOGru85gCDbqaffrU';

// DOM element references for efficient access
const searchInput = document.getElementById('searchInput');
const searchBtn = document.querySelector('.search-button');
const notification = document.querySelector('.notification');
const ipAddressContent = document.getElementById('ipAddress');
const locationContent = document.getElementById('location');
const timeZoneContent = document.getElementById('timezone');
const ispContent = document.getElementById('isp');
const loader = document.querySelector('.loader');

//VARIABLES
let result; // Stores API response data
let latitude; // Latitude of searched IP location
let longitude; // Longitude of searched IP location
let map = null; // Leaflet map instance

// NOTIFICATION FUNCTION
function notificationFunc(msg) {
  // Set notification text content
  notification.textContent = msg;
  // Remove the hidden class to show the notification
  notification.classList.remove('hidden');
  // Hide notification after 2 seconds
  setTimeout(() => {
    notification.classList.add('hidden');
  }, 2000);
}

//get visitor ip on load
window.onload = function () {
  fetch('https://api.ipify.org?format=json')
    .then((response) => response.json())
    .then((data) => {
      searchInput.value = data.ip;
      searchBtnFunc();
    })
    .catch((error) => {
      console.error('Error fetching visitor IP:', error);
    });
};

//  Handles search button click - fetches IP geolocation data and updates map
function searchBtnFunc() {
  // Check if search input is empty
  if (searchInput.value.trim() === '') {
    notificationFunc('No value found');
    return;
  }


  // Show loader while fetching data
  loader.classList.remove('hidden');

  // Fetch geolocation data from IPify API
  fetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${searchInput.value}`
  )
    .then((response) => response.json())
    .then((data) => {
      // Extract relevant data from API response
      const ipAddress = data.ip;
      const isp = data.isp;
      const timeZone = data.location.timezone;
      const city = data.location.city;
      const country = data.location.country;
      latitude = data.location.lat;
      longitude = data.location.lng;

      // Update results card with fetched data
      ipAddressContent.textContent = ipAddress;
      locationContent.textContent = `${city}, ${country}`;
      timeZoneContent.textContent = timeZone;
      ispContent.textContent = isp;

      // Create or update the map with new coordinates
      createOrUpdateMap();

      // Hide loader after data is fetched and processed
      loader.classList.add('hidden');
    })
    .catch((error) => {
      // Display error notification if API call fails
      notificationFunc('Error');
      console.error('Error:', error);
    });
}
searchBtn.addEventListener('click', searchBtnFunc);

//  Creates a new Leaflet map or updates existing map with new coordinates
function createOrUpdateMap() {
  // Remove existing map instance if one is already displayed
  if (map) {
    map.remove();
  }

  // Create new map centered on the coordinates with zoom level 13
  map = L.map('map').setView([latitude, longitude], 13);

  // Add OpenStreetMap tile layer to the map with proper configuration
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    minZoom: 2,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  // Add a marker pin at the searched coordinates
  var marker = L.marker([latitude, longitude]).addTo(map);
}
document.querySelector('form').addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    e.preventDefault(); // Prevents the default action (form submission)
  }
});
