"use client";

import React from "react";
import * as S from "./styles";
import Image from "next/image";

export const Hero = () => {
  return (
    <S.Container>
      <S.Title>
        Meu nome é <span>Israel Humberto</span> e eu sou desenvolvedor{" "}
        <span>front-end</span>
      </S.Title>
      <S.Subtitle>
        Aqui você pode me conhecer melhor meus projetos e um pouco sobre mim
      </S.Subtitle>
      <figure>
        <Image
          src={"/assets/images/laptop-wave.png"}
          alt="Hero Image"
          width={800}
          height={800}
          loading="lazy"
        />
      </figure>
      <S.Box>
        <p>Portfólio atualizado regularmente</p>
      </S.Box>
    </S.Container>
  );
};
