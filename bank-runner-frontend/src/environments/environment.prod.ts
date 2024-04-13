export const bankRunnerBasePath = 'http://ec2-44-193-80-88.compute-1.amazonaws.com:8888';
export const checkingBasePath = `${bankRunnerBasePath}/checking`;

export const environment = {
  production: true,
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
