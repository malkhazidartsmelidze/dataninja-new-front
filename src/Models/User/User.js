import api from 'common/api';

class User {
  constructor(obj) {
    this.id = obj.id;
    this.name = obj.name;
    this.language = obj.language;
  }

  getLanguage() {
    return this.language;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  changeLanguage(languageCode) {
    return User.service.changeLanguage(languageCode).then(() => {
      api.setLanguageCode(languageCode);
    });
  }
}

User.service = {
  bootstrap: () => {
    return api.call('get', '/user/bootstrap').then(api.getData);
  },
  login: (credentials) => {
    return api.call('post', '/login', credentials).then((res) => {
      api.setToken(res.data.token);
      return new User(res.data.user);
    });
  },
  logout: () => {
    return api.setToken(null).call('post', '/logout');
  },
  changeLanguage: (code) => {
    return api.call('post', '/user/actions', {
      action: 'change-language',
      language: code,
    });
  },
};

export default User;
