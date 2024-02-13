"use client";

import React from "react";
import { TitleSection } from "../TitleSection";
import * as S from "./styles";
import PropTypes from "prop-types";
import { FaRegFilePdf } from "react-icons/fa6";

export const AboutMeSection = ({ data }) => {
  console.log(data);
  return (
    <S.Container>
      <TitleSection title="Sobre mim" />
      <S.Text>
        {data.text.map((text, index) => (
          <p key={index}>{text.paragraph}</p>
        ))}
      </S.Text>
      <S.BtnContainer>
        {data.pdf.url && (
          <S.Btn href={data.pdf.url} target="_blank" download>
            Currículo <FaRegFilePdf />
          </S.Btn>
        )}
      </S.BtnContainer>
    </S.Container>
  );
};

AboutMeSection.propTypes = {
  data: PropTypes.object.isRequired,
};
