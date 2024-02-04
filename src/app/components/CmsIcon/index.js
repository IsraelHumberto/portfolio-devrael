import React from "react";
import PropTypes from "prop-types";

export const CmsIcon = ({ icon }) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: icon,
      }}
    />
  );
};

CmsIcon.propTypes = {
  icon: PropTypes.string.isRequired,
};
