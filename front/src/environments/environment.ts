// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  stripePublishable: 'pk_test_1CeQcac0nu0fI09pdg5yyms7',
  firebase: {
    apiKey: 'AIzaSyAobLzoAPyh8w0w-tXGr14jp4CyJHRrez0',
    authDomain: 'rain-on-mars.firebaseapp.com',
    databaseURL: 'https://rain-on-mars.firebaseio.com',
    projectId: 'rain-on-mars',
    storageBucket: 'rain-on-mars.appspot.com',
    messagingSenderId: '352420792528'
  },
  host: 'http://dev.api.walmoo.com:5000',
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
