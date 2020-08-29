import api from 'common/api';

class FacebookVideoAudience {}

FacebookVideoAudience.service = {
  create: (data) => {
    return api.call('post', '/audience/fb/create', data).then(api.getData);
  },
};

export default FacebookVideoAudience;
