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
  /**
   * Login user with credentials
   * @param {object} credentials {user: {string}, password: {string}}
   * @returns {User} New User Created
   */
  login: (credentials) => {
    return api.post('/login', credentials).then((res) => {
      api.setToken(res.data.token);
      return new User(res.data.user);
    });
  },
  /**
   * Get current logged in user
   * @returns {User} New User Created
   */
  me: () => {
    return api.post('/me').then((res) => {
      return new User(res.data.user);
    });
  },
  /**
   * Logout Current User
   * @return Promise
   */
  logout: () => {
    return api.setToken(null).post('/logout');
  },
  /**
   * Change user language on server
   * @return Promise
   */
  changeLanguage: (code) => {
    return api.post('/change-language', {
      language: code,
    });
  },
};

export default User;
