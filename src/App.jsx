import "./App.css";
import Form from "./Components/Form/Index";

import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import { schema, schemaDictionary } from "./Schemas/schema";
import { useState } from "react";

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

  const [show, setShow] = useState({
    divForm: "show",
    divThanks: "hide",
    showForm: true,
  });

  const [info, setInfo] = useState({
    name: "",
  });

  const handleInfo = (data) => {
    let cleaner = Object.keys(data)
      .filter((atr) => data[atr] !== "")
      .reduce((value, atr) => ({ ...value, [atr]: data[atr] }), {});
    setInfo(cleaner);
    reset();
    handleShow();
  };

  const handleShow = () => {
    console.log("foi");
    if (show.showForm === true) {
      setShow({
        divForm: "hide",
        divThanks: "show",
        showForm: false,
      });
      console.log(show);
    } else {
      console.log("foi pro else");
      setShow({
        divForm: "show",
        divThanks: "hide",
        showForm: true,
      });
    }
  };

  return (
    <div className="App card__geral">
      <div className={show.divForm}>
        <Form
          handleSubmit={handleSubmit}
          register={register}
          unregister={unregister}
          errors={errors}
          handleInfo={handleInfo}
        />
      </div>
      <div className={show.divThanks}>
        <h2 className="titulo titulo-hover">Obrigado!</h2>
        <p className="subtitulo subtitulo-hover">
          Sua solicitação já está sendo processada, e te contataremos em breve!
        </p>
        <p className="texto">Abaixo você pode verificar suas informações!</p>
        <div className="answer__grid">
          {Object.keys(info).map((key, index) => {
            return (
              <p key={index} className="texto">
                {schemaDictionary[key]}: {info[key]}
              </p>
            );
          })}
        </div>
        <input
          type="submit"
          value="Voltar"
          className="texto btn__geral"
          onClick={handleShow}
        />
      </div>
    </div>
  );
}

export default App;
