"use client";

import React from "react";
import * as S from "./styles";
import { TitleSection } from "../TitleSection";
import PropTypes from "prop-types";
import Link from "next/link";
import { HiArrowTrendingUp } from "react-icons/hi2";
import { Project } from "../Project";

export const MainProjects = ({ title, data }) => {
  const dataHome = data.filter((project) => project.home === true).slice(0, 3);

  return (
    <S.Container>
      <S.Header>
        <TitleSection title={title} width="45" />
        <Link href="/projects">
          Ver todos
          <HiArrowTrendingUp />
        </Link>
      </S.Header>
      <S.Projects>
        {dataHome.map((project, index) => (
          <Project data={project} key={index} />
        ))}
      </S.Projects>
    </S.Container>
  );
};

MainProjects.propTypes = { title: PropTypes.string, data: PropTypes.array };
