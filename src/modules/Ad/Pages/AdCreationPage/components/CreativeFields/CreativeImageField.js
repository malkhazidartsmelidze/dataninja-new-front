import React, { useState, Fragment } from 'react';
import PanelField from 'components/ExpansionPanel/PanelField';
import Gallery from 'components/Gallery';
import { Button } from '@material-ui/core';
import { useNewAdContext } from 'store/NewAdContext';

export default ({ name, onChange }) => {
  const { setField, getField } = useNewAdContext();
  const creativeImage = getField('google_creative_image');
  const [image, setImage] = useState(creativeImage.value);
  const [open, setOpen] = useState(false);

  const images = [
    {
      thumbnail: '/images/google/4893670291242243165.jpg',
      url: '/images/google/4893670291242243165.jpg',
      id: '4893670291242243165',
      type: 'image',
      title: 'Google Image',
      subTitle: '4893670291242243165',
    },
    {
      thumbnail: '/images/google/2450767316103865229.jpg',
      url: '/images/google/2450767316103865229.jpg',
      id: '2450767316103865229',
      type: 'image',
      title: 'Google Image',
      subTitle: '2450767316103865229',
    },
    {
      thumbnail: '/images/google/18170049452171155392.jpg',
      url: '/images/google/18170049452171155392.jpg',
      id: '18170049452171155392',
      type: 'image',
      title: 'Google Image',
      subTitle: '18170049452171155392',
    },
    {
      thumbnail: '/images/google/15325079968528347012.jpg',
      url: '/images/google/15325079968528347012.jpg',
      id: '15325079968528347012',
      type: 'image',
      title: 'Google Image',
      subTitle: '15325079968528347012',
    },
    {
      thumbnail: '/images/google/13374693845428449848.png',
      url: '/images/google/13374693845428449848.png',
      id: '13374693845428449848',
      type: 'image',
      title: 'Google Image',
      subTitle: '13374693845428449848',
    },
    {
      thumbnail: '/images/google/16544355117755588151.png',
      url: '/images/google/16544355117755588151.png',
      id: '16544355117755588151',
      type: 'image',
      title: 'Google Image',
      subTitle: '16544355117755588151',
    },
    {
      thumbnail: '/images/google/6199045395756796116.png',
      url: '/images/google/6199045395756796116.png',
      id: '6199045395756796116',
      type: 'image',
      title: 'Google Image',
      subTitle: '6199045395756796116',
    },
  ];

  return (
    <PanelField
      content={
        <Fragment>
          <Button onClick={() => setOpen(true)} variant='contained'>
            Browse Image Here
          </Button>
          <Gallery
            onChoose={(id) => setImage(id)}
            open={open}
            handleClose={() => setOpen(false)}
            data={images}
          />
        </Fragment>
      }
    />
  );
};
