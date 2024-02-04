"use client";

import React from "react";
import { TitleSection } from "../TitleSection";
import * as S from "./styles";
import PropTypes from "prop-types";
import Image from "next/image";
import { CmsIcon } from "../CmsIcon";

export const SkillsSection = ({ data }) => {
  return (
    <S.Container>
      <TitleSection title="Skills" />
      <S.Skills>
        {data.icons.map((icon, index) => (
          <S.Skill key={index} size={icon.size}>
            <CmsIcon icon={icon.svg} />
            <p>{icon.name}</p>
          </S.Skill>
        ))}
      </S.Skills>
    </S.Container>
  );
};

SkillsSection.propTypes = {
  data: PropTypes.object.isRequired,
};
