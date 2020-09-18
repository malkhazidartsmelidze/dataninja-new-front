import { Button, Dialog, DialogActions, DialogContent, Grid } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

export default function Cropper(props) {
  const [crop, setCrop] = useState({
    unit: '%',
    width: props.width || 50,
    aspect: props.aspect || 16 / 9,
  });
  const [src, setSrc] = useState(null);
  const [imageRef, setImageRef] = useState(null);
  const [croppedImageUrl, setCroppedImageUrl] = useState(null);
  const [open, setOpen] = useState(props.open);

  useEffect(() => {
    if (!props.file) return;
    const reader = new FileReader();
    reader.addEventListener('load', () => setSrc(reader.result));
    reader.readAsDataURL(props.file);
  }, [props.file]);

  useEffect(() => {
    setOpen(props.open);
  }, [props.open]);

  const onSelectFile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener('load', () => setSrc(reader.result));
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  // If you setState the crop in here you should return false.
  const onImageLoaded = (image) => {
    setImageRef(image);
  };

  const onCropComplete = (crop) => {
    makeClientCrop(crop);
  };

  const onCropChange = (crop, percentCrop) => {
    setCrop(crop);
  };

  const makeClientCrop = async (crop) => {
    if (imageRef && crop.width && crop.height) {
      const croppedImageUrl = await getCroppedImg(imageRef, crop, 'newFile.jpeg');
      setCroppedImageUrl(croppedImageUrl);
    }
  };

  function getCroppedImg(image, crop, fileName) {
    const canvas = document.createElement('canvas');
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext('2d');

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    return new Promise((resolve, reject) => {
      canvas.toBlob((blob) => {
        props.onBlob && props.onBlob(blob);
        if (!blob) {
          console.error('Canvas is empty');
          return;
        }
        blob.name = fileName;
        // window.URL.revokeObjectURL(this.fileUrl);
        const fileUrl = window.URL.createObjectURL(blob);
        resolve(fileUrl);
      }, 'image/jpeg');
    });
  }

  const handleClose = () => {
    setOpen(false);
  };

  const imageChosen = () => {
    if (!croppedImageUrl) return alert('You have to choose image');
    props.onImageChoose &&
      props.onImageChoose({
        url: croppedImageUrl,
      });
    setOpen(false);
  };

  return (
    <Dialog maxWidth='md' fullWidth onClose={handleClose} open={open}>
      <DialogContent>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} md={8}>
            <ReactCrop
              src={src}
              crop={crop}
              ruleOfThirds
              onImageLoaded={onImageLoaded}
              onComplete={onCropComplete}
              onChange={onCropChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            {croppedImageUrl ? (
              <img alt='Crop' style={{ maxWidth: '100%' }} src={croppedImageUrl} />
            ) : null}
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color='primary'>
          Cancel
        </Button>
        <Button variant='contained' color='primary' onClick={imageChosen}>
          Choose Image
        </Button>
      </DialogActions>
    </Dialog>
  );
}
