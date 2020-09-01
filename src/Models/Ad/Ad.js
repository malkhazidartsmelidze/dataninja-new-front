import api from 'common/api';

export default class Ad {
  constructor() {}
}

Ad.service = {
  createInGoogle: (data) => {
    return api.post('/ad/google/traffic/create', data).then(api.getData);
  },
  createInFacebook: (data) => {
    return api.post('/ad/facebook/traffic/create', data).then(api.getData);
  },
};
