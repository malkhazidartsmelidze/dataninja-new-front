import api from 'common/api';

class FacebookAudience {}

FacebookAudience.service = {
  create: (data) => {
    return api.call('post', '/audience/fb/create', data).then(api.getData);
  },
};

export default FacebookAudience;
