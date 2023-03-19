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

  return (
    <div className="App">
      <Form
        handleSubmit={handleSubmit}
        register={register}
        unregister={unregister}
        errors={errors}
      />
    </div>
  );
}

export default App;
