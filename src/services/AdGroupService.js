import api from 'common/api';

class AdGroupService {
  static getCampaignAdGroups(network, campaign) {
    return api.call('get', `/${network}/adgroup/${campaign}/all`).then(api.getData);
  }

  static createAdGroup(network, data) {
    return api.call('create', `/${network}/adgroup/create`, data).then(api.getData);
  }

  static sync(network) {
    return api.call('post', `/${network}/adgroup/sync`).then(api.getData);
  }
}

export default AdGroupService;
