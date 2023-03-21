import "./App.css";
import Form from "./Components/Form/Index";

import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import { schema } from "./Schemas/schema";

function App() {
  const {
    register,
    unregister,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  let infoForm = {
    fullName: "nome",
    eventType: "tipo",
    typeOther: "outro",
  };

  const handleInfo = (data) => {
    let cleaner = Object.keys(data)
      .filter((atr) => data[atr] !== "")
      .reduce((value, atr) => ({ ...value, [atr]: data[atr] }), {});
    infoForm = cleaner;
    console.log(infoForm);
    reset();
  };

  return (
    <div className="App card__geral">
      <div className="hide">
        <Form
          handleSubmit={handleSubmit}
          register={register}
          unregister={unregister}
          errors={errors}
          handleInfo={handleInfo}
        />
      </div>
      <div className="show">
        <h2 className="titulo titulo-hover">Obrigado!</h2>
        <p className="subtitulo subtitulo-hover">
          Sua solicitação já está sendo processada, e te contataremos em breve!
        </p>
        <div className="answer__grid">
          {Object.keys(infoForm).map((key, index) => {
            return (
              <p key={index} className="texto">
                {key}: {infoForm[key]}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
