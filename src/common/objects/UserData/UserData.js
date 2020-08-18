import api from 'common/api';

class UserData {
  constructor(obj) {
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

UserData.service = {
  fetch: () => {
    return api.post('/user/bootstrap').then((res) => {
      return new UserData(res.data);
    });
  },
};

export default UserData;
