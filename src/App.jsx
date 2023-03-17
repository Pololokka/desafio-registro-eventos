import "./App.css";
import Form from "./Components/Form/Index";

import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="App">
      <Form handleSubmit={handleSubmit} register={register} errors={errors} />
    </div>
  );
}

export default App;
