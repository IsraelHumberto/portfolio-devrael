"use client";
import { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { BsXLg } from "react-icons/bs";
import * as S from "./styles";
import { MenuMobile } from "../MenuMobile";

export const Header = () => {
  const [asideOpen, setAsideOpen] = useState(false);

  const handleAsideOpen = () => {
    setAsideOpen(!asideOpen);
  };

  return (
    <>
      <S.Header>
        <h1>DevRael</h1>

        {asideOpen ? (
          <BsXLg fontSize={24} color="#FFF" onClick={handleAsideOpen} />
        ) : (
          <BiMenuAltRight
            fontSize={24}
            color="#FFF"
            onClick={handleAsideOpen}
          />
        )}
      </S.Header>
      <MenuMobile asideOpen={asideOpen} />
    </>
  );
};
