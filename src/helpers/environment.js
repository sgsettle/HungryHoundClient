let APIURL = '';

switch (window.location.hostname) {
    // this is the local host name of react app
    case 'localhost' || '127.0.0.1':
    // this is the local host name of your server/API
    APIURL = 'http://localhost:3000';
    break;
    // this is the deployed react app
    case 'sgs-hungryhound.herokuapp.com':
        // this is the full url of deployed server/API
        APIURL = 'https://sgs-hungryhound.herokuapp.com'
}

export default APIURL;