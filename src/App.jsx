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
  let infoForm;

  const handleInfo = (data) => {
    let cleaner = Object.keys(data)
      .filter((atr) => data[atr] !== "")
      .reduce((value, atr) => ({ ...value, [atr]: data[atr] }), {});
    infoForm = cleaner;
    console.log(infoForm);
    reset();
  };

  return (
    <div className="App">
      <div className="show">
        <Form
          handleSubmit={handleSubmit}
          register={register}
          unregister={unregister}
          errors={errors}
          handleInfo={handleInfo}
        />
      </div>
      <div className="hide"></div>
    </div>
  );
}

export default App;
