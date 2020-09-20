import { Button, Card, CardActionArea, CardActions, CardMedia } from '@material-ui/core';
import { mdiFileUpload } from '@mdi/js';
import Icon from '@mdi/react';
import PanelField from 'components/ExpansionPanel/PanelField';
import React, { Fragment, useEffect, useState } from 'react';
import 'react-image-crop/dist/ReactCrop.css';
import Cropper from 'components/Cropper';
import useCreateAd from 'modules/Ad/store/CreateAdContext';

export default function CreativeImageField(props) {
  const [file, setFile] = useState(null);
  const [image, setImage] = useState({});
  const { creativeFormData } = useCreateAd();

  const onSelectFile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const imageChosen = (src) => {
    setImage(src);
  };

  const blobChanged = (blob) => {
    creativeFormData.delete(props.name);
    creativeFormData.append(props.name, blob, 'creativeName.jpg');
  };

  return (
    <PanelField
      content={
        <Fragment>
          <Card>
            <CardActionArea>
              <CardMedia image={image.url} style={{ height: 150, backgroundSize: 'contain' }} />
            </CardActionArea>
            <CardActions>
              <Button tooltip='Select new image file' startIcon={<Icon path={mdiFileUpload} />}>
                <input
                  type='file'
                  accept='image/*'
                  onChange={onSelectFile}
                  className='opacity-0 full-width-and-height'
                />
                Choose File
              </Button>
            </CardActions>
          </Card>

          <Cropper
            name='creative_media_test'
            onBlob={blobChanged}
            file={file}
            aspect={props.aspect || 16 / 9}
            open={Boolean(file)}
            onImageChoose={imageChosen}
          />
        </Fragment>
      }
    />
  );
}
