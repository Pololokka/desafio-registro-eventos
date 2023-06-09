import * as yup from "yup";

export const schema = yup.object().shape({
  fullName: yup
    .string()
    .min(3, "Preencha corretamente este campo!")
    .required("Preencha este campo!"),
  eventType: yup.string().required("Escolha uma opção!"),
  typeOther: yup.string().when("eventType", {
    is: "Outro",
    then: (schema) => schema.required("Preencha este campo!"),
    otherwise: (schema) => schema.min(0),
  }),
  invitedPplMin: yup
    .number()
    .integer()
    .typeError("Preencha corretamente o campo de mínimo de pessoas!")
    .required("Preencha o campo de mínimo de pessoas!"),
  invitedPplMax: yup
    .number("Preencha o campo de máximo de pessoas!")
    .integer("Preencha corretamente este campo!")
    .typeError("Preencha corretamente o campo de máximo de pessoas!")
    .required("Preencha o campo de máximo de pessoas!"),
  email: yup
    .string()
    .email()
    .typeError("Preencha corretamente este campo!")
    .required("Preencha este campo!"),
  cpf: yup
    .number()
    .test(
      "len",
      "Preencha corretamente este campo!",
      (val) => val.toString().length >= 11
    )
    .typeError("Preencha corretamente este campo!")
    .required("Preencha este campo!"),
  theme: yup.string(),
  bdayAge: yup
    .string()
    .typeError("")
    .when("eventType", {
      is: "Aniversário",
      then: (schema) =>
        schema
          .typeError("Preencha corretamente este campo!")
          .required("Preencha este campo!"),
      otherwise: (schema) => schema.min(0),
    }),
  bdayGender: yup.string().when("eventType", {
    is: "Aniversário",
    then: (schema) => schema.required("Preencha este campo!"),
    otherwise: (schema) => schema.min(0),
  }),
  foundOut: yup.string(),
  foundOther: yup.string().when("foundOut", {
    is: "Outro",
    then: (schema) => schema.min(0),
  }),
});

export const schemaDictionary = {
  fullName: "Nome Completo/Razão Social",
  eventType: "Tipo de Evento",
  typeOther: "Especificação do Tipo",
  invitedPplMin: "Mínimo de Pessoas",
  invitedPplMax: "Máximo de Pessoas",
  email: "E-mail",
  cpf: "CPF/CNPJ",
  theme: "Tema",
  bdayAge: "Idade",
  bdayGender: "Gênero",
  foundOut: "Como nos Encontrou",
  foundOther: "Especificação De Como Nos Encontrou",
};
