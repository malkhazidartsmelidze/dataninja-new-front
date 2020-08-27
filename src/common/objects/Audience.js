import api from 'common/api';

class Audience {
  constructor(obj) {}
}

Audience.service = {
  create: (data) => {
    return api.post('/audience/create', data).then((data) => data);
  },
};

export default Audience;
