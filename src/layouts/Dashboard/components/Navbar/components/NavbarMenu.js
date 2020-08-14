import React from "react";
import MenuItem from "./MenuItem";
import ChildMenu from "./ChildMenu";
import useCvs from "store/CvsContext";
import { CircularProgress } from "@material-ui/core";
import MenuIconButton from "./MenuIconButton";
import { FormattedMessage as FM } from "react-intl";

export default (props) => {
  const { cvs, loading: loadingCvs } = useCvs();

  return (
    <div {...props}>
      <MenuItem title={<FM id="menu.dashboard" />} leftIcon="home" url="/dashboard" showDivider={true} />

      <MenuItem
        title={<FM id="menu.personal_info" />}
        leftIcon="person_add"
        url="/dashboard"
        description={<FM id="menu.personal_info_desc" />}
        showDivider={true}
        opened={true}
      >
        <ChildMenu title={<FM id="menu.personal_info" />} leftIcon="person" url="/form/personal" />
        <ChildMenu title={<FM id="menu.contact_info" />} leftIcon="perm_contact_calendar" url="/form/contact" />
        <ChildMenu title={<FM id="menu.education" />} leftIcon="school" url="/form/education" />
        <ChildMenu title={<FM id="menu.experience" />} leftIcon="star" url="/form/experience" />
        <ChildMenu title={<FM id="menu.academical_activity" />} leftIcon="apartment" url="/form/academical" />
        <ChildMenu title={<FM id="menu.prof_competencies" />} leftIcon="check_box" url="/form/competentions" />
        <ChildMenu title={<FM id="menu.cover_letter" />} leftIcon="thumb_up_alt" url="/form/cover-letter" />
        <ChildMenu title={<FM id="menu.portfolio" />} leftIcon="import_contacts" url="/form/portfolio" />
      </MenuItem>

      <MenuItem
        title={<FM id="menu.my_cv" />}
        leftIcon="list"
        url="/cvs"
        description="Crafted Cv-s"
        showDivider={true}
        opened={true}
      >
        {loadingCvs ? <CircularProgress /> : null}
        {Object.keys(cvs).map((key) => {
          const cv = cvs[key];
          const EditCv = (
            <MenuIconButton
              onClick={(e) => {
                e.preventDefault();
              }}
              icon="edit"
            />
          );
          return (
            <ChildMenu
              key={key}
              title={cv.getName()}
              leftIcon="description "
              url={`/user/cv/${cv.getId()}`}
              rightIcon={EditCv}
            />
          );
        })}
      </MenuItem>
    </div>
  );
};
