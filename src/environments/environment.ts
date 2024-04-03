// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    apiUrl: 'http://103.226.248.168:8096/automl-service-v2/api',
    apiUrlFe: 'http://localhost:8081',
    imageUrl: 'http://localhost:8081/api/application-images/show-image/',
    sso: 'https://sso2.viettel.vn:8001/sso',
    webportalURL: 'http://localhost:4201',
    appCode: 'DWP'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
