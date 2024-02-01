"use client";
import React from "react";
import * as S from "./styles";
import Image from "next/image";
import { BiWorld } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";

export const Project = ({ data }) => {
  return (
    <S.Container>
      <Image
        src={data.image.url}
        alt={data.image.alt}
        width={346}
        height={201}
      />
      <S.Tools>{data.tools}</S.Tools>
      <S.Infos>
        <S.Title>{data.name}</S.Title>
        <S.Date>{data.date}</S.Date>
        <S.Description>{data.desciption}</S.Description>
        <S.BtnContainer>
          {data.link_live.url && (
            <S.Btn href={data.link_live.url} target={data.link_live.target}>
              Live <BiWorld />
            </S.Btn>
          )}

          {data.link_github.url && (
            <S.Btn
              secondary={true}
              href={data.link_github.url}
              target={data.link_github.target}
            >
              Github <FaGithub />
            </S.Btn>
          )}
        </S.BtnContainer>
      </S.Infos>
    </S.Container>
  );
};
