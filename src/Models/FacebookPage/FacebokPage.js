import api from 'common/api';

class FacebookPage {
  constructor(page) {
    this.name = page.name;
    this.id = page.id;
    this.page_id = page.page_id;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getPageId() {
    return this.page_id;
  }
}

FacebookPage.service = {
  sync: (account_id) => {
    return api.call('post', 'facebook-pages/sync', {
      account_id: account_id,
    });
  },
  getByAccountId: (account_id) => {
    return api.call('post', 'facebook-pages/get-by-account', {
      account_id: account_id,
    });
  },
};

export default FacebookPage;
