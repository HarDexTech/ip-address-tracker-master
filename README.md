# IP Address Tracker

A modern, responsive web application that tracks IP addresses and displays geolocation information on an interactive map. Search for any IP address or domain to instantly view its location, timezone, and ISP details.

## Features

✨ **Key Functionality:**

- **IP/Domain Search**: Enter any IP address or domain name to retrieve geolocation data
- **Interactive Map**: View the exact location on an OpenStreetMap-powered Leaflet map
- **Real-time Information**: Displays IP address, location (city & country), timezone, and ISP
- **Responsive Design**: Optimized layouts for desktop, tablet, and mobile devices
- **User Feedback**: Toast notifications for error handling and user guidance
- **Smooth Interactions**: Hover states and visual feedback on all interactive elements

## Tech Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript (ES6+)
- **API**: [IPify Geolocation API](https://geo.ipify.org/) - IP address lookup service
- **Mapping**: [Leaflet.js](https://leafletjs.com/) - Interactive map library with OpenStreetMap tiles
- **Styling**: Custom CSS with mobile-first responsive design approach

## Project Structure

```
ip-address-tracker/
├── index.html          # Main HTML structure
├── styles.css          # Complete styling with responsive breakpoints
├── script.js           # Application logic and API integration
├── README.md           # Project documentation
├── design/             # UI design mockups (desktop & mobile)
└── images/             # Background patterns and assets
```

## Getting Started

### Prerequisites

- Any modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection for API calls and map tiles

### Installation

1. **Clone the repository** (or download the files):

```bash
git clone <repository-url>
cd ip-address-tracker
```

2. **No build process needed** - This is a pure HTML/CSS/JS project with no dependencies to install.

3. **Open the application**:
   - Simply open `index.html` in your web browser
   - Or use a local server:
   ```bash
   python -m http.server 8000
   # Then visit http://localhost:8000
   ```

## Usage

### Search for an IP Address

1. Enter an IP address or domain name in the search field
2. Click the search button (arrow icon) or press Enter
3. View the results instantly:
   - **IP Address**: The queried IP address
   - **Location**: City and country of the IP
   - **Timezone**: The timezone associated with the location
   - **ISP**: Internet Service Provider information
4. The map automatically centers on the location with a marker pin

### Example Searches

- `8.8.8.8` - Google DNS server
- `1.1.1.1` - Cloudflare DNS server
- `example.com` - Domain name (resolves to its IP)

## Responsive Design

The application is fully responsive with three breakpoints:

| Breakpoint   | Width          | Layout                                            |
| ------------ | -------------- | ------------------------------------------------- |
| Desktop      | > 1024px       | Horizontal result card, full-width map            |
| Tablet       | 768px - 1024px | Adjusted spacing and font sizes                   |
| Mobile       | < 768px        | Stacked result card (vertical), simplified layout |
| Small Mobile | < 375px        | Optimized spacing and reduced font sizes          |

## API Information

### IPify Geolocation API

- **Endpoint**: `https://geo.ipify.org/api/v2/country,city`
- **Method**: GET
- **Parameters**:
  - `apiKey`: Authentication key (included)
  - `ipAddress`: IP address or domain to lookup
- **Response**: JSON with location, timezone, and ISP data

⚠️ **Important**: The API key in this project is free-tier only. For production use, consider:

- Restricting API usage to your domain
- Using environment variables to store sensitive keys
- Implementing backend API routing for security

## File Descriptions

### `index.html`

- Semantic HTML5 structure
- Form for user input
- Results card sections for displaying geolocation data
- Map container for Leaflet integration
- External library includes (Leaflet CSS & JS)
- Comprehensive HTML comments documenting each section

### `styles.css`

- Global reset and base styles with detailed comments
- Flexbox-based responsive layouts
- CSS sections for header, search form, results card, and map
- Mobile-first design with three responsive breakpoints
- Utility classes (`.hidden` for show/hide)
- Notification toast styling
- Clear comment sections explaining each major area

### `script.js`

- Well-organized sections with clear comments
- DOM element selectors and caching
- Notification system with auto-hide functionality
- API fetch and data processing with error handling
- Map creation and management with Leaflet.js
- Event listeners for search functionality
- JSDoc comments for functions

## Code Features

### Error Handling

- Input validation for empty searches
- API error catching with user notifications
- Graceful fallback for network issues

### Performance

- Event delegation where applicable
- Minimal DOM manipulation
- Efficient API calls with debouncing potential

### Accessibility

- Semantic HTML elements
- ARIA labels on form inputs
- Keyboard-accessible search form

## Customization

### Changing Colors

Edit the color values in `styles.css`:

```css
.header {
  background-color: #your-color;
}
.search-button {
  background-color: #your-color;
}
```

### Changing Map Provider

To use a different tile provider instead of OpenStreetMap, modify the `L.tileLayer()` call in `script.js`:

```javascript
L.tileLayer('https://your-tile-provider-url/{z}/{x}/{y}.png').addTo(map);
```

### Changing Fonts

Update the font-family in `styles.css`:

```css
body {
  font-family: 'Your Font', fallback fonts;
}
```

## Known Limitations

1. **API Rate Limiting**: Free tier has request limits (typically 45 requests/minute)
2. **Accuracy**: IP geolocation is approximate, not precise street-level accuracy
3. **Private IPs**: Cannot resolve private/local IP addresses (192.168.x.x, 10.x.x.x)
4. **CORS**: The API and tiles are public, no CORS configuration needed

## Browser Compatibility

| Browser | Support               |
| ------- | --------------------- |
| Chrome  | ✅ Full support       |
| Firefox | ✅ Full support       |
| Safari  | ✅ Full support       |
| Edge    | ✅ Full support       |
| IE 11   | ⚠️ Requires polyfills |

## Future Enhancements

Potential improvements for the application:

- [ ] Search history functionality
- [ ] Multiple IP comparison
- [ ] Export results as PDF/CSV
- [ ] Dark mode toggle
- [ ] Keyboard shortcut for search (Ctrl+/)
- [ ] Batch IP lookup
- [ ] WebWorkers for heavy processing
- [ ] Service Worker for offline support
- [ ] Advanced caching strategy
- [ ] Analytics integration

## Learning Resources

- [MDN Web Docs - Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [Leaflet.js Documentation](https://leafletjs.com/reference.html)
- [CSS Flexbox Guide](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)
- [Responsive Web Design](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)

## Troubleshooting

### Map not displaying

- Check browser console for errors
- Verify internet connection for tile loading
- Clear browser cache and reload

### Search not working

- Verify API key is valid
- Check if IP address/domain is correct
- Check network tab for API errors

### Notification not showing

- Ensure JavaScript is enabled
- Check that notification element exists in DOM

## Credits

- **Challenge**: [Frontend Mentor](https://www.frontendmentor.io)
- **API**: [IPify](https://geo.ipify.org/)
- **Maps**: [Leaflet.js](https://leafletjs.com/) & [OpenStreetMap](https://www.openstreetmap.org/)
- **Icons**: Included in design assets
- **Font**: [Rubik](https://fonts.google.com/specimen/Rubik) via Google Fonts

## License

This project is open source and available under the MIT License. Feel free to use it for learning or as a starting point for your own projects.

## Support & Feedback

If you encounter any issues or have suggestions:

1. Check the troubleshooting section above
2. Review browser console for error messages
3. Verify API key validity and rate limits
4. Test with different IP addresses/domains

---

**Last Updated**: December 2024  
**Version**: 1.0.0  
**Status**: Fully Functional ✅
