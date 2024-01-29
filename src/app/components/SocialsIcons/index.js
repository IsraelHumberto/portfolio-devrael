import React from "react";
import * as S from "./styles";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const socials = [
  {
    name: "linkedin",
    herf: "https://www.linkedin.com/in/israelhumberto/",
    icon: <FaLinkedinIn color="#abb2bf" fontSize={32} />,
  },
  {
    name: "github",
    herf: "https://github.com/IsraelHumberto",
    icon: <FaGithub color="#abb2bf" fontSize={32} />,
  },
];

export const SocialsIcons = () => {
  return (
    <S.Container>
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {social.icon}
        </a>
      ))}
    </S.Container>
  );
};
