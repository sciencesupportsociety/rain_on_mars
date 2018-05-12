// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAdeIr5aaCcmHDDQWWn8QZCTDVXpRxm51c',
    authDomain: 'walmoo-loop.firebaseapp.com',
    databaseURL: 'https://walmoo-loop.firebaseio.com',
    projectId: 'walmoo-loop',
    storageBucket: 'walmoo-loop.appspot.com',
    messagingSenderId: '672932042999'
  },
  walmoo: {
    apiUrl: 'https://dev.api.walmoo.com/api',
    businessUrl: 'https://dev.business.walmoo.com',
    businessId: 4,
    featuredActivitiesIds: [31],
    surveyId: '31',
    apiHash: 'V57065317AEQQ4FW77LNVXYRYN993HRFWG88D83R',
    operatorUsername: 'operator2',
  },
  projectName: 'loop',
};
