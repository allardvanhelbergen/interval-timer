import config from '../config';

/**
 * Load from spreadsheet
 * Get the right values and assign.
 */
export default function (onloadCallback) {
  window.gapi.load(
    'client', 
    {
      timeout: 5000, // 5 seconds.
        // Handle gapi.client initialization.
      callback() {
        _initGapiClient(onloadCallback);
      },
      onerror() {
        // Handle loading error.
        console.error('gapi.client failed to load!');
      },
      ontimeout() {
        // Handle timeout.
        console.error('gapi.client could not load in a timely manner!');
      }
    }
  );
}

function _initGapiClient(callback) {
  // Initialize Google API client library.

  window.gapi.client
    .init({
      apiKey: config.apiKey,
      // API key automatically added to the Discovery Document URLs.
      discoveryDocs: config.discoveryDocs
    })
    .then(() => {
      // Initialize and make the API request.
      _loadSheet(callback);
    });
}

function _loadSheet(callback) {
  window.gapi.client.load('sheets', 'v4', () => {
    window.gapi.client.sheets.spreadsheets.values
      .get({
        spreadsheetId: config.spreadsheetId,
        range: 'Sheet1!A2:B'
      })
      .then(
        response => {
          const data = response.result.values;
          const intervals = data.map(interval => ({
            time: interval[0],
            description: interval[1],
          })) || [];

          callback({
            intervals
          });
        },
        response => {
          console.error('false the loadsheet failed');
          callback(false, response.result.error);
        }
      );
  });
}

