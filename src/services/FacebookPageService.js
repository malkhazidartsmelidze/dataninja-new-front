import api from 'common/api';

class FacebookPageService {
  static getAll() {
    return api.call('get', '/facebook/page/all').then(api.getData);
  }

  static sync() {
    return api.call('post', '/facebook/page/sync').then(api.getData);
  }

  static getPageVideos(pageId) {
    return api.call('get', `/facebook/page/${pageId}/videos`).then(api.getData);
  }
}

export default FacebookPageService;
