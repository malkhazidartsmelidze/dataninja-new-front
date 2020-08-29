import api from 'common/api';

class FacebookAd {
  constructor(obj) {
    this.campaigns = obj.campaigns;
    this.adsets = obj.adsets;
    this.ads = obj.ads;
    this.creativeAd = obj.creativeAd;
    this.campaign = obj.campaign;
    this.adset = obj.adset;
  }
}

FacebookAd.service = {
  create: (ad) => {
    api.call('post', '/ad/facebook/create ');
  },
};

export default FacebookAd;
