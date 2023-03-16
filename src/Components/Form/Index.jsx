import Input from "../Input/Index";

const Form = () => {
  return (
    <div className="card__geral">
      <h1 className="titulo titulo-hover">Placeholder</h1>
      <Input
        name="name"
        title="Nome Completo/Razão Social"
        type="text"
        required={true}
      />
    </div>
  );
};

export default Form;
