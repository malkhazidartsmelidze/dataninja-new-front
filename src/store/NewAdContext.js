import React, { createContext, useState, useContext, useEffect } from 'react';
import AdForm from 'Models/Ad/AdForm';

export const NewAdContext = createContext({});

const initState = {
  networks: {
    facebook: true,
    google: true,
  },
  is_responsive: true,
  ad_type: 'conversions',
  bid_optimization_type: 'pay_per_click',
  budget: 30,
  objective: 'traffic',
  campaign_name: 'Sample Campaign NAme',
  adset_name: 'Sample Adset Name',
  start_date: '2020-09-25',
  end_date: '2020-09-30',
  targeting_gender: 'all',
  targeting_age_from: 15,
  targeting_age_to: 65,
  targeting_location_type: 'living',
  targeting_languages: [],
  targeting_expansion: 50,
  targeting_devices: ['mobile', 'desktop', 'tablet'],
  targeting_household_income: [],
  targeting_parental_status: '',
  targeting_ad_rotation: 'optimize',
  creative_name: 'Dataninja-Trafic-Ad-2223',
  creative_headlines: { headline1: 'Example Headline 1' },
  creative_primary_texts: { primarytext1: 'Example Primary Text 1' },
  creative_descriptions: { description1: 'Example Description' },
  creative_long_headline: 'Example Long Headline',
  creative_promo_text: 'Exammple Promo Text',
  creative_business_name: 'Exammple Business Name',
  creative_link: '',
  splits: {
    facebook: {
      bid_type: 'auto',
      pay_for: 'pay_for_impressions',
      bid_amount: 1.0,
      cost_or_bid: 'cost',
      budget: 10,
    },
    google: {
      bid_type: 'manual_cpc',
      enhanced_bid: true,
      budget: 20,
      bid_amount: 1.0,
    },
  },
};

export const NewAdContextProvider = ({ children }) => {
  const [state, setState] = useState(initState);
  const [formConfig, setFormConfig] = useState({});

  const isNetworkSelected = (network) => {
    return state.networks[network];
  };

  const setNetwork = (network, bool) => {
    setState((old) => {
      old.networks[network] = bool;
      return { ...old };
    });
  };
  /** @todo remove */
  const setBidOptimizationType = (type) => {
    setState((old) => {
      old.bid_optimization_type = type;
      return Object.create(old);
    });
  };

  const getField = (field) => {
    const generalFieldValue = state[field];
    const facebookFieldValue = state.splits.facebook[field] || state[field];
    const googleFieldValue = state.splits.google[field] || state[field];
    const isSplitted = state.splits.facebook[field] || state.splits.google[field];

    return {
      value: generalFieldValue,
      facebook: facebookFieldValue,
      google: googleFieldValue,
      isSplitted: isSplitted,
    };
  };

  const setField = (field, value, network = null) => {
    console.log(field, value, network);
    if (network) {
      setState((old) => {
        old.splits[network][field] = value;
        return Object.create(old);
      });
    } else {
      setState({ ...state, [field]: value });
    }
  };

  useEffect(() => {
    AdForm.service.getFormConfig().then((config) => setFormConfig(config));
  }, []);

  return (
    <NewAdContext.Provider
      value={{
        networks: state.networks,
        setNetwork,
        setBidOptimizationType,
        isNetworkSelected,
        setField,
        getField,
        formConfig,
      }}
    >
      {children}
    </NewAdContext.Provider>
  );
};

export const useNewAdContext = () => useContext(NewAdContext);
