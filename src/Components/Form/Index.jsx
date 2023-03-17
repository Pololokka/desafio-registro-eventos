const Form = ({ handleSubmit, register, errors }) => {
  return (
    <div className="card__geral">
      <h1 className="titulo titulo-hover">Placeholder</h1>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <label htmlFor="fullName" className="texto texto__hover">
          Nome Competo/Razão Social
        </label>
        <input
          {...register("fullName", {
            required: "Preencha este campo!",
            minLength: {
              value: 3,
              message: "Preencha corretamente este campo!",
            },
          })}
          type="text"
          className="texto input__geral"
        />
        <p className="texto">{errors.fullName?.message}</p>

        <input type="submit" value="Enviar" className="texto btn__geral" />
      </form>
    </div>
  );
};

export default Form;
