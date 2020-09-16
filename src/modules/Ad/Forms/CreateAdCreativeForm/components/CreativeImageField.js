import { Button, Card, CardActionArea, CardActions, CardMedia } from '@material-ui/core';
import { mdiFileUpload } from '@mdi/js';
import Icon from '@mdi/react';
import PanelField from 'components/ExpansionPanel/PanelField';
import React, { Fragment, PureComponent, useState } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import Cropper from 'components/Cropper';

export default function CreativeImageField(props) {
  const [file, setFile] = useState(null);
  const [image, setImage] = useState({});

  const onSelectFile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const imageChosen = (src) => {
    console.log(src);
    setImage(src);
  };

  return (
    <PanelField
      content={
        <Fragment>
          <input type='hidden' name='creative_media' value={image && image.url} />
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

          <Cropper file={file} open={Boolean(file)} onImageChoose={imageChosen} />
        </Fragment>
      }
    />
  );
}
