import React from 'react';
import MenuItem from './MenuItem';
// import ChildMenu from './ChildMenu';
import { FormattedMessage as FM } from 'react-intl';

export default (props) => {
  return (
    <div {...props}>
      <MenuItem
        title={<FM id='menu.dashboard' />}
        leftIcon='home'
        url='/dashboard'
        showDivider={true}
      />

      <MenuItem
        title={<FM id='menu.website_builder' />}
        leftIcon='vertical_split'
        url='/builder'
        description={<FM id='menu.website_builder_desc' />}
        showDivider={true}
      />
      <MenuItem
        title={<FM id='menu.sales_postbacks' />}
        leftIcon='anchor'
        url='/sales'
        description={<FM id='menu.sales_postbacks_desc' />}
        showDivider={true}
      />
      <MenuItem
        title={<FM id='menu.ad_creation' />}
        leftIcon='addchart'
        url='/ad'
        description={<FM id='menu.ad_creation_desc' />}
        showDivider={true}
      />
      <MenuItem
        title={<FM id='menu.reporting' />}
        leftIcon='show_chart'
        url='/reporting'
        description={<FM id='menu.reporting_desc' />}
        showDivider={true}
      />
      <MenuItem
        title={<FM id='menu.crm' />}
        leftIcon='people_alt'
        url='/crm'
        description={<FM id='menu.crm_desc' />}
        showDivider={true}
      />
      <MenuItem
        title={<FM id='menu.audiences' />}
        leftIcon='pie_chart'
        url='/audiences'
        description={<FM id='menu.audiences_desc' />}
        showDivider={true}
      />
    </div>
  );
};
/* <ChildMenu
title={<FM id='menu.portfolio' />}
leftIcon='import_contacts'
url='/form/portfolio'
/> */
