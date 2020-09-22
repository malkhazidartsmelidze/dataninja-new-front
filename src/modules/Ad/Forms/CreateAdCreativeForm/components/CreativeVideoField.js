import React, { useState, Fragment } from 'react';
import PanelField from 'components/ExpansionPanel/PanelField';
import Gallery from 'components/Gallery';
import { useEffect } from 'react';
import { Button, CircularProgress } from '@material-ui/core';
import FacebookPageService from 'services/FacebookPageService';
import useCreateAd from 'modules/Ad/store/CreateAdContext';

export default (props) => {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [videoIds, setVideoIds] = useState([]);
  const [loading, setLoading] = useState(false);
  const { page_id } = useCreateAd();

  const fetchVideos = () => {
    setLoading(true);
    FacebookPageService.getPageVideos(page_id)
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
    if (!page_id) return;
    fetchVideos();
  }, [page_id]);

  if (loading) return <CircularProgress />;

  if (!page_id) return <PanelField content={<div>Please Choose Page First</div>} />;

  if (page_id && !data.length)
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
          <Button onClick={() => setOpen(true)} variant='contained'>
            Or Upload New
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
