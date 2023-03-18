import "./Styles.css";

import Input from "../Input/Index";

const Form = ({ handleSubmit, register, errors }) => {
  return (
    <div className="card__geral">
      <h1 className="titulo titulo-hover">Placeholder</h1>
      <form
        className="form__container"
        onSubmit={handleSubmit((data) => console.log(data))}
      >
        <Input
          name="fullName"
          title="Nome Completo/Razão Social"
          type="text"
          register={register}
          errors={errors}
        />

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
              onWheel={(e) => e.target.blur()}
            />

            <span className="texto">A</span>
            <input
              {...register("invitedPplMax")}
              type="number"
              min={0}
              className="texto input__geral"
              onWheel={(e) => e.target.blur()}
            />
          </div>
          <p className="texto">{errors.invitedPplMin?.message}</p>
          <p className="texto">{errors.invitedPplMax?.message}</p>
        </div>

        <Input
          name="email"
          title="E-mail de Contato"
          type="text"
          register={register}
          errors={errors}
        />

        <Input
          name="cpf"
          title="CPF/CNPJ"
          type="number"
          register={register}
          errors={errors}
        />

        <Input
          name="theme"
          title="Tema da Festa"
          type="text"
          register={register}
          errors={errors}
        />

        <Input
          name="bdayAge"
          title="Idade do Aniversariante"
          type="number"
          register={register}
          errors={errors}
        />

        <Input
          name="bdayGender"
          title="Gênero do Aniversariante"
          type="text"
          register={register}
          errors={errors}
        />

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
