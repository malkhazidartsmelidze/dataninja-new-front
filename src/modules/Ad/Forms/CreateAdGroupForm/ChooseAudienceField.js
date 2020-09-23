import React, { useState, Fragment, useEffect } from 'react';
import { Button, Dialog, DialogContent, Grid } from '@material-ui/core';
import { CreateAudiencePage } from 'modules/Audiences/Pages';
import PanelField from 'components/ExpansionPanel/PanelField';
import AudienceService from 'services/AudienceService';
import useUser from 'store/UserContext';
import AutocompleteField from 'components/Fields/AutocompleteField';
import useCreateAd from 'modules/Ad/store/CreateAdContext';

export default () => {
  const [audienceModalOpen, setAudienceModalOpen] = useState(false);
  const [googleAudiences, setGoogleAudiences] = useState([]);
  const [facebookAudiences, setFacebookAudiences] = useState([]);
  const { defaultAccounts } = useUser();
  const { type } = useCreateAd();
  const [audiences, setAudiences] = useState({
    facebook: {
      include: [],
      exclude: [],
    },
    google: {
      include: [],
      exclude: [],
    },
  });
  const handleClose = () => {
    setAudienceModalOpen(false);
  };

  useEffect(() => {
    AudienceService.getAudiences('facebook').then((audiences) => {
      if (!Array.isArray(audiences)) return;
      const all = audiences.map((a) => {
        return { name: a.name, value: a.id };
      });
      setFacebookAudiences(all);
    });
  }, [defaultAccounts.facebook]);

  useEffect(() => {
    AudienceService.getAudiences('google').then((data) => {
      if (!Array.isArray(data)) return;
      setGoogleAudiences(data);
    });
  }, [defaultAccounts.google]);

  const handleAudienceChange = (network, type, value) => {
    setAudiences((o) => {
      o[network][type] = value;
      return { ...o };
    });
  };

  const isSearch = type === 'search';

  return (
    <PanelField
      content={
        <Grid container spacing={2}>
          {Object.keys(audiences).map((network) => {
            return Object.keys(audiences[network]).map((type) => {
              return audiences[network][type].map((val, key) => {
                return (
                  <input
                    key={`${network}${type}${key}`}
                    type='hidden'
                    name={`targetings[audiences][${network}][${type}][]`}
                    value={val.value}
                  />
                );
              });
            });
          })}
          {!isSearch && (
            <Grid item xs={12}>
              <AutocompleteField
                placeholder='Enter Choose Facebook Audience'
                options={facebookAudiences}
                onChange={(_, n) => handleAudienceChange('facebook', 'include', n)}
                name='targetings[include_audiences][facebook][]'
              />
            </Grid>
          )}
          {!isSearch && (
            <Grid item xs={12}>
              <AutocompleteField
                placeholder='Exclude Facebook Audience'
                name='targetings[exclude_audiences][facebook][]'
                options={facebookAudiences}
                onChange={(_, n) => handleAudienceChange('facebook', 'exclude', n)}
              />
            </Grid>
          )}
          <Grid item xs={12}>
            <AutocompleteField
              name='targetings[include_audiences][google][]'
              placeholder='Include Google Audience'
              options={googleAudiences}
              onChange={(_, n) => handleAudienceChange('google', 'include', n)}
            />
          </Grid>
          <Grid item xs={12}>
            <AutocompleteField
              name='targetings[exclude_audiences][google][]'
              placeholder='Exclude Google Audience'
              options={googleAudiences}
              onChange={(_, n) => handleAudienceChange('google', 'exclude', n)}
            />
          </Grid>

          <Grid item xs={12}>
            <Button onClick={() => setAudienceModalOpen(true)} variant='contained'>
              Or Create New Audience
            </Button>
            <Dialog onClose={handleClose} open={audienceModalOpen}>
              <DialogContent style={{ padding: 8, boxShadow: 'none' }}>
                <CreateAudiencePage />
              </DialogContent>
            </Dialog>
          </Grid>
        </Grid>
      }
    />
  );
};
