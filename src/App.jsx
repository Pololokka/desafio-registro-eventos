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
  };

  return (
    <div className="App">
      <Form
        handleSubmit={handleSubmit}
        register={register}
        unregister={unregister}
        errors={errors}
        handleInfo={handleInfo}
      />
    </div>
  );
}

export default App;
