"use client";

import React from "react";
import * as S from "./styles";
import PropTypes from "prop-types";

export const TitleSection = ({ title, width }) => {
  return (
    <S.Container>
      <S.Title width={width}>
        <span>#</span>
        {title}
      </S.Title>
    </S.Container>
  );
};

TitleSection.propTypes = {
  title: PropTypes.string.isRequired,
  width: PropTypes.string,
};
