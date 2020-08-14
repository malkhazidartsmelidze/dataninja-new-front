import axios from 'axios';
import { tokenKey, languageKey } from 'consts';

class Api {
  constructor() {
    this.api = axios.create({
      baseURL: 'http://gocv.test/api/',
      timeout: 10000,
    });
    this.authToken = localStorage.getItem(tokenKey) || null;
    this.language = localStorage.getItem(languageKey) || 'ka';

    this.setToken(this.authToken);
    this.setLanguageCode(this.language);
  }

  get = (...params) => {
    return this.api.get(...params);
  };

  post = (...params) => {
    return this.api.post(...params);
  };

  setToken(token) {
    this.authToken = token;
    this.api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    token ? localStorage.setItem(tokenKey, token) : localStorage.removeItem(tokenKey);
    return this;
  }

  setLanguageCode(code) {
    this.language = code;
    this.api.defaults.headers.common['Accept-Language'] = this.language;
    localStorage.setItem(languageKey, code);
    return this;
  }
}

export default new Api();
