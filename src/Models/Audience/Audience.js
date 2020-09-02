import api from 'common/api';

class Audience {
  constructor(obj) {}
}

Audience.service = {
  create: (data) => {
    return api.post('/audience/create', data).then((data) => data);
  },
  createGoogleCustomAudience: (data) => {
    return api.post('/audience/google/create-custom', data).then((data) => data);
  },
  getTargetingTrees: () => {
    return api.post('/audience/google/get-tree').then((data) => data);
  },
};

export default Audience;
