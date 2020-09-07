import api from 'common/api';

class PixelService {
  static getAll() {
    return api.call('get', '/facebook/pixel/all').then(api.getData);
  }

  static sync() {
    return api.call('post', '/facebook/pixel/sync').then(api.getData);
  }
}

export default PixelService;
