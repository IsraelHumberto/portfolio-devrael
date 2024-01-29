"use client";

import React, { useEffect } from "react";
import * as S from "./styles";
import Link from "next/link";
import { SocialsIcons } from "../SocialsIcons";

const links = [
  { href: "#", label: "Home" },
  { href: "#", label: "Sobre mim" },
  { href: "#", label: "Projetos" },
  { href: "#", label: "Currículo" },
  { href: "#", label: "Contato" },
];

export const MenuMobile = ({ asideOpen }) => {
  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = asideOpen ? "hidden" : "auto";
  });

  return (
    <S.Menu open={asideOpen}>
      <nav>
        <S.List>
          {links.map(({ href, label }) => (
            <li key={label}>
              <Link href={href}>
                <S.Hashtag>#</S.Hashtag>
                <S.Label>{label}</S.Label>
              </Link>
            </li>
          ))}
        </S.List>
      </nav>
      <SocialsIcons />
    </S.Menu>
  );
};
