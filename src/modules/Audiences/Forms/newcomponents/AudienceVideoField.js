import React, { useState, Fragment } from 'react';
import PanelField from 'components/ExpansionPanel/PanelField';
import Gallery from 'components/Gallery';
import { useEffect } from 'react';
import { Button } from '@material-ui/core';
import FacebookPageService from 'services/FacebookPageService';

export default (props) => {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [videoIds, setVideoIds] = useState([]);
  const { pageId } = props;

  useEffect(() => {
    if (!pageId) return;
    FacebookPageService.getPageVideos(pageId).then((videos) => {
      console.log(videos);
    });
  }, [pageId]);

  return (
    <PanelField
      content={
        <Fragment>
          {videoIds.map((id) => {
            return <input type='hidden' name={`${props.name}[]`} value={id} />;
          })}
          <Button onClick={() => setOpen(true)} variant='contained'>
            Browse Videos
          </Button>
          <Gallery
            onChoose={(ids) => {
              setVideoIds(ids);
              setOpen(false);
            }}
            multiple
            open={open}
            handleClose={() => setOpen(false)}
            data={data}
          />
        </Fragment>
      }
    />
  );
};
