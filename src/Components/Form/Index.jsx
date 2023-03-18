import "./Styles.css";

const Form = ({ handleSubmit, register, errors }) => {
  return (
    <div className="card__geral">
      <h1 className="titulo titulo-hover">Placeholder</h1>
      <form
        className="form__container"
        onSubmit={handleSubmit((data) => console.log(data))}
      >
        <label htmlFor="fullName" className="texto texto-hover">
          Nome Completo/Razão Social
        </label>
        <input
          {...register("fullName")}
          type="text"
          className="texto input__geral"
        />
        <p className="texto">{errors.fullName?.message}</p>

        <label htmlFor="eventType" className="texto texto-hover">
          Tipo de Evento
        </label>
        <select
          {...register("eventType", { required: "Escolha uma opção!" })}
          className="texto input__geral"
        >
          <option value="Aniversário">Aniversário</option>
          <option value="Reunião de Empresa/Workshop">
            Reunião de Empresa/Workshop
          </option>
          <option value="Coffee and Meet">Coffee and Meet</option>
          <option value="Outro">Outro</option>
        </select>

        <div className="invite__container">
          <label htmlFor="invitedPpl" className="texto texto-hover">
            Quantidade de pessoas
          </label>
          <div className="invite__input--container">
            <span className="texto">De</span>
            <input
              {...register("invitedPplMin")}
              type="number"
              min={0}
              className="texto input__geral"
            />

            <span className="texto">A</span>
            <input
              {...register("invitedPplMax")}
              type="number"
              min={0}
              className="texto input__geral"
            />
          </div>
          <p className="texto">{errors.invitedPplMin?.message}</p>
          <p className="texto">{errors.invitedPplMax?.message}</p>
        </div>

        <label htmlFor="eventType" className="texto texto-hover">
          E-mail de Contato
        </label>
        <input
          {...register("email")}
          type="text"
          className="texto input__geral"
        />
        <p className="texto">{errors.email?.message}</p>

        <label htmlFor="cpf" className="texto texto-hover">
          CPF/CNPJ
        </label>
        <input
          {...register("cpf")}
          type="number"
          className="texto input__geral"
        />
        <p className="texto">{errors.cpf?.message}</p>

        <label htmlFor="theme" className="texto texto-hover">
          Tema da Festa
        </label>
        <input
          {...register("theme")}
          type="text"
          className="texto input__geral"
        />
        <p className="texto">{errors.theme?.message}</p>

        <label htmlFor="bdayAge" className="texto texto-hover">
          Idade do Aniversariante
        </label>
        <input
          {...register("bdayAge")}
          type="number"
          className="texto input__geral"
          min={0}
        />
        <p className="texto">{errors.bdayAge?.message}</p>

        <label htmlFor="bdayGender" className="texto texto-hover">
          Gênero do Aniversariante
        </label>
        <input
          {...register("bdayGender")}
          type="text"
          className="texto input__geral"
        />
        <p className="texto">{errors.bdayGender?.message}</p>

        <label htmlFor="foundOut" className="texto texto-hover">
          Como você conheceu a Salão 96?
        </label>
        <select
          {...register("foundOut", { required: "Escolha uma opção!" })}
          className="texto input__geral"
        >
          <option value="Recomendação">Recomendação</option>
          <option value="Facebook">Facebook</option>
          <option value="Instagram">Instagram</option>
          <option value="Anúncio">Anúncio</option>
          <option value="Outro">Outro</option>
        </select>

        <input type="submit" value="Enviar" className="texto btn__geral" />
      </form>
    </div>
  );
};

export default Form;
