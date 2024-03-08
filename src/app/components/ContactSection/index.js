"use client";

import React, { useEffect, useState } from "react";
import { TitleSection } from "../TitleSection";
import { Field, Formik, ErrorMessage } from "formik";
import * as S from "./styles";
import * as Yup from "yup";
import ReCAPTCHA from "react-google-recaptcha";
import emaijs from "@emailjs/browser";

export const ContactSection = () => {
  const [captcha, setCaptcha] = useState(false);

  const handleSubmit = (values) => {
    const templateParams = {
      from_name: values.name,
      email: values.email,
      message: values.message,
      title: values.title,
    };

    emaijs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID_EMAILJS,
        process.env.NEXT_PUBLIC_TEMPLATE_ID_EMAILJS,
        templateParams,
        {
          publicKey: process.env.NEXT_PUBLIC_KEY_PUBLIC_EMAILJS,
        }
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((error) => {
        console.error("FAILED...", error);
      });
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(5, "Mínimo de 5 caracteres")
      .max(25, "Máximo de 25 caracteres")
      .matches(
        /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
        "Apenas letras são permitidas"
      )
      .required("Nome é obrigatório"),
    email: Yup.string().email("Email inválido").required("Email é obrigatório"),
    title: Yup.string()
      .min(5, "Mínimo de 5 caracteres")
      .max(25, "Máximo de 25 caracteres")
      .required("Título é obrigatório"),
    message: Yup.string()
      .min(15, "Mínimo de 15 caracteres")
      .max(1000, "Máximo de 1000 caracteres")
      .required("Mensagem é obrigatória"),
  });

  return (
    <S.Container>
      <TitleSection title="Contato" />
      <Formik
        initialValues={{
          name: "Israel",
          email: "israelfluzao@gmail.com",
          message: "primeira mensagem",
          title: "Titulo vaga",
        }}
        onSubmit={(values) => captcha && handleSubmit(values)}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <S.InputContainer>
              <S.InputGroup>
                <S.InputFieldset>
                  <S.Label htmlFor="name">Nome</S.Label>
                  <Field type="text" name="name" className="inputForm" />

                  <ErrorMessage
                    name="name"
                    component="div"
                    className="errorField"
                  />
                </S.InputFieldset>

                <S.InputFieldset>
                  <S.Label htmlFor="email">Email</S.Label>
                  <Field type="email" name="email" className="inputForm" />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="errorField"
                  />
                </S.InputFieldset>
              </S.InputGroup>

              <S.InputFieldset>
                <S.Label htmlFor="title">Título</S.Label>
                <Field type="text" name="title" className="inputForm" />
                <ErrorMessage
                  name="title"
                  component="div"
                  className="errorField"
                />
              </S.InputFieldset>

              <S.InputFieldset>
                <S.Label htmlFor="message">Mensagem</S.Label>
                <Field as="textarea" name="message" className="inputForm" />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="errorField"
                />
              </S.InputFieldset>

              <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                onChange={setCaptcha}
              />

              <S.Btn type="submit">Enviar</S.Btn>
            </S.InputContainer>
          </form>
        )}
      </Formik>
    </S.Container>
  );
};

export default ContactSection;
