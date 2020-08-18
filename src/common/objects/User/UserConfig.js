import api from 'common/api';

class UserConfig {
  constructor(obj = {}) {
    Object.keys(obj).map((key) => {
      this[key] = obj[key];
    });
  }

  getFacebookAccounts() {
    if (!this.accounts.facebook) return [];

    return this.accounts.facebook;
  }

  getGoogleAccounts() {
    if (!this.accounts.google) return [];

    return this.accounts.google;
  }
}

UserConfig.service = {
  fetch: () => {
    return api.post('/user/bootstrap').then((res) => {
      return new UserConfig(res.data);
    });
  },
};

UserConfig.checkLoaded = (userConfig) => {
  return userConfig instanceof UserConfig;
};

export default UserConfig;
