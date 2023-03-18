import "./App.css";
import Form from "./Components/Form/Index";

import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  fullName: yup
    .string()
    .min(3, "Preencha corretamente este campo!")
    .required("Preencha este campo!"),
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
    .typeError("Preencha corretamente este campo!")
    .required("Preencha este campo!"),
  theme: yup.string().required("Preencha este campo!"),
  bdayAge: yup
    .number()
    .integer()
    .typeError("Preencha corretamente este campo!")
    .required("Preencha este campo!"),
  bdayGender: yup.string().required("Preencha este campo!"),
});

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <div className="App">
      <Form handleSubmit={handleSubmit} register={register} errors={errors} />
    </div>
  );
}

export default App;
