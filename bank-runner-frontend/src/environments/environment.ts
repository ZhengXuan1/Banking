// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const bankRunnerBasePath = 'http://localhost:8888';
export const checkingBasePath = `${bankRunnerBasePath}/checking`;

export const environment = {
  production: false,
  bankRunnerBasePath,
  login: `${bankRunnerBasePath}/loginCheck`,
  register: `${bankRunnerBasePath}/registerNewAccount`,
  profilePage: `${bankRunnerBasePath}/myProfilePage`,
  updateAccount: `${bankRunnerBasePath}/updateAccount`,
  managerLogin: `${bankRunnerBasePath}/managerLogin`,
  loanUpdate: `${bankRunnerBasePath}/loanUpdate`,
  loanFind: `${bankRunnerBasePath}/loanFind`,
  loanApplication: `${bankRunnerBasePath}/loanApplication`,
  verifyEmail: `${bankRunnerBasePath}/verifyEmail`,
  updatePassword: `${bankRunnerBasePath}/updatePassword`,
  checking: {
    basePath: checkingBasePath,
    findall: (id: number) => `${checkingBasePath}/findall/${id}`,
    create: `${checkingBasePath}/create`,
    delete: (id: number) => `${checkingBasePath}/delete/${id}`,
    update: `${checkingBasePath}/update`,
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
