import React from 'react';
import MenuItem from './MenuItem';
import { FormattedMessage as FM } from 'react-intl';
import P from 'paths';
import ChildMenu from './ChildMenu';

export default (props) => {
  return (
    <div {...props}>
      <MenuItem
        title={<FM id='menu.dashboard' />}
        leftIcon='home'
        url={P.DASHBOARD_MODULE}
        showDivider={true}
      />
      <MenuItem
        title={<FM id='menu.website_builder' />}
        leftIcon='vertical_split'
        url={P.BUILDER_MODULE}
        description={<FM id='menu.website_builder_desc' />}
        showDivider={true}
      />
      <MenuItem
        title={<FM id='menu.sales_postbacks' />}
        leftIcon='anchor'
        url={P.CRM_MODULE}
        description={<FM id='menu.sales_postbacks_desc' />}
        showDivider={true}
      />
      <MenuItem
        title={<FM id='menu.ad_creation' />}
        leftIcon='addchart'
        url={P.AD_CREATE}
        description={<FM id='menu.ad_creation_desc' />}
        showDivider={true}
      />
      <MenuItem
        title={<FM id='menu.reporting' />}
        leftIcon='show_chart'
        url={P.USER_MODULE}
        description={<FM id='menu.reporting_desc' />}
        showDivider={true}
      />
      <MenuItem
        title={<FM id='menu.crm' />}
        leftIcon='people_alt'
        url={P.CRM_MODULE}
        description={<FM id='menu.crm_desc' />}
        showDivider={true}
      />
      <MenuItem
        title={<FM id='menu.audiences' />}
        leftIcon='pie_chart'
        url={P.AUDIENCES_MODULE}
        description={<FM id='menu.audiences_desc' />}
        showDivider={true}
        opened={true}
      >
        <ChildMenu
          title={<FM id='menu.audiences_create' />}
          leftIcon='import_contacts'
          url={P.AUDIENCES_CREATE}
        />
      </MenuItem>
    </div>
  );
};
/* <ChildMenu
title={<FM id='menu.portfolio' />}
leftIcon='import_contacts'
url='/form/portfolio'
/> */
