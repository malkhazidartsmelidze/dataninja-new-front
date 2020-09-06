import React, { useState, Fragment } from 'react';
import PanelField from 'components/ExpansionPanel/PanelField';
import Gallery from 'components/Gallery';
import { useEffect } from 'react';
import { Button, CircularProgress } from '@material-ui/core';
import FacebookPageService from 'services/FacebookPageService';

export default (props) => {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [videoIds, setVideoIds] = useState([]);
  const [loading, setLoading] = useState(false);
  const { pageId } = props;

  const fetchVideos = () => {
    setLoading(true);
    FacebookPageService.getPageVideos(pageId)
      .then((videos) => {
        if (!Array.isArray(videos)) return;
        setData(videos);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    if (!pageId) return;
    fetchVideos();
  }, [pageId]);

  if (loading) return <CircularProgress />;

  if (!pageId) return <PanelField content={<div>Please Choose Page First</div>} />;

  if (pageId && !data.length)
    return <PanelField content={<div>No Videos Found On This Page</div>} />;

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
