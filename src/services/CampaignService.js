import api from 'common/api';

class CampaignService {
  static getCampaigns(network) {
    return api.call('get', `/${network}/campaign/all`).then(api.getData);
  }

  static createCampaign(network, data) {
    return api.call('post', `/${network}/campaign/create`, data).then(api.getData);
  }

  static sync(network) {
    return api.call('post', `/${network}/campaign/sync`).then(api.getData);
  }
}

export default CampaignService;
