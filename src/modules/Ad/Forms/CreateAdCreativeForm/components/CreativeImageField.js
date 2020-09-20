import { Button, Card, CardActionArea, CardActions, CardMedia } from '@material-ui/core';
import { mdiFileUpload, mdiImageAlbum } from '@mdi/js';
import Icon from '@mdi/react';
import PanelField from 'components/ExpansionPanel/PanelField';
import React, { Fragment, useEffect, useState } from 'react';
import 'react-image-crop/dist/ReactCrop.css';
import Cropper from 'components/Cropper';
import useCreateAd from 'modules/Ad/store/CreateAdContext';
import AdImageService from 'services/AdImageService';
import Gallery from 'components/Gallery';

export default function CreativeImageField(props) {
  const [file, setFile] = useState(null);
  const [image, setImage] = useState({});
  const [chosenImages, setChosenImages] = useState([]);
  const [images, setImages] = useState([]);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const { creativeFormData } = useCreateAd();
  const { network, type } = props;

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

  const onImagesChosen = (ids) => {
    setChosenImages(ids);
    setGalleryOpen(false);
  };

  useEffect(() => {
    if (!galleryOpen) return;
    if (images.length) return;
    AdImageService.getImages(network, { type: type }).then((data) => {
      setImages(data);
    });
  }, [galleryOpen]);

  return (
    <PanelField
      content={
        <Fragment>
          <Card>
            <CardActionArea>
              <CardMedia image={image.url} style={{ height: 150, backgroundSize: 'contain' }} />
            </CardActionArea>
            <CardActions>
              <Button
                tooltip='Choose Image From Galery'
                onClick={() => setGalleryOpen(true)}
                startIcon={<Icon path={mdiImageAlbum} />}
              >
                Choose Image
              </Button>
              <Button tooltip='Select new image file' startIcon={<Icon path={mdiFileUpload} />}>
                <input
                  type='file'
                  accept='image/*'
                  onChange={onSelectFile}
                  className='opacity-0 full-width-and-height'
                />
                Or Upload New
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
          <Gallery
            onChoose={onImagesChosen}
            multiple
            open={galleryOpen}
            handleClose={() => setGalleryOpen(false)}
            data={images}
          />
        </Fragment>
      }
    />
  );
}
