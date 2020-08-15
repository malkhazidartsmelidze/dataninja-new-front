import React from 'react';
import MenuItem from './MenuItem';
import ChildMenu from './ChildMenu';
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
        title={<FM id='menu.personal_info' />}
        leftIcon='person_add'
        url='/dashboard'
        description={<FM id='menu.personal_info_desc' />}
        showDivider={true}
        opened={true}
      >
        <ChildMenu title={<FM id='menu.personal_info' />} leftIcon='person' url='/form/personal' />
        <ChildMenu
          title={<FM id='menu.contact_info' />}
          leftIcon='perm_contact_calendar'
          url='/form/contact'
        />
        <ChildMenu title={<FM id='menu.education' />} leftIcon='school' url='/form/education' />
        <ChildMenu title={<FM id='menu.experience' />} leftIcon='star' url='/form/experience' />
        <ChildMenu
          title={<FM id='menu.academical_activity' />}
          leftIcon='apartment'
          url='/form/academical'
        />
        <ChildMenu
          title={<FM id='menu.prof_competencies' />}
          leftIcon='check_box'
          url='/form/competentions'
        />
        <ChildMenu
          title={<FM id='menu.cover_letter' />}
          leftIcon='thumb_up_alt'
          url='/form/cover-letter'
        />
        <ChildMenu
          title={<FM id='menu.portfolio' />}
          leftIcon='import_contacts'
          url='/form/portfolio'
        />
      </MenuItem>
    </div>
  );
};
